#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>
#include <time.h>

// Configurações dos módulos
#define DHTPIN 15     
#define DHTTYPE DHT11 
const int MQ7_PIN = 34;     
const int MQ135_PIN = 35;   
const int HEATER_PIN = 32;  

// Configurações para acessar o wifi
const char* ssid = "Nome da rede";
const char* password = "senha da rede";

// Configurações do Firebase
String firebaseAuth = "chave da api";
String projectID = "id do projeto";  
String collectionID = "sensores";    

// Configurações do fuso horário
const long gmtOffset_sec = 0;  
const int daylightOffset_sec = 0; 

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando ao WiFi...");
  }
  Serial.println("Conectado ao WiFi");

  dht.begin();

  configTime(gmtOffset_sec, daylightOffset_sec, "pool.ntp.org", "time.nist.gov");

  pinMode(HEATER_PIN, OUTPUT);
  digitalWrite(HEATER_PIN, HIGH); 
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Informação do sensor específico 
    int id_sensor = 1;
    String cidade = "São José dos Campos";
    String bairro = "Jardim Santa Rosa";
    String rua = "Rua Hilda Rosa de Jesus";
    String cep = "12228894";
    String uf = "SP";

    // Leituras do DHT11
    int h = dht.readHumidity();
    int t = dht.readTemperature();

    // Leituras dos sensores MQ
    int sensorValueMQ7 = analogRead(MQ7_PIN);
    float ppmCO = calculatePPMCO(sensorValueMQ7);

    int sensorValueMQ135 = analogRead(MQ135_PIN);
    float ppmCO2 = calculatePPMCO2(sensorValueMQ135);

    // Verificação das leituras
    if (isnan(h) || isnan(t)) {
      Serial.println("Falha na leitura do sensor DHT!");
      return;
    }

    if (ppmCO < 0 || ppmCO > 1000) ppmCO = 0; // Validar faixa de CO
    if (ppmCO2 < 0 || ppmCO2 > 5000) ppmCO2 = 0; // Validar faixa de CO₂

    // Obter horário no formato ISO 8601
    struct tm timeinfo;
    if (!getLocalTime(&timeinfo)) {
      Serial.println("Falha ao obter o horário");
      return;
    }

    char buffer[30];
    strftime(buffer, sizeof(buffer), "%Y-%m-%dT%H:%M:%SZ", &timeinfo);
    String timestampFirestore = String(buffer);

    // Formatar dados JSON
    String jsonData = "{";
    jsonData += "\"fields\": {";
    jsonData += "\"cidade\": {\"stringValue\": \"" + cidade + "\"},";
    jsonData += "\"bairro\": {\"stringValue\": \"" + bairro + "\"},";
    jsonData += "\"rua\": {\"stringValue\": \"" + rua + "\"},";
    jsonData += "\"cep\": {\"stringValue\": \"" + cep + "\"},";
    jsonData += "\"uf\": {\"stringValue\": \"" + uf + "\"},";
    jsonData += "\"temperatura\": {\"integerValue\": \"" + String(t) + "\"},";
    jsonData += "\"umidade\": {\"integerValue\": \"" + String(h) + "\"},";
    jsonData += "\"infCO2\": {\"doubleValue\": \"" + String(ppmCO2) + "\"},";
    jsonData += "\"infCO\": {\"doubleValue\": \"" + String(ppmCO) + "\"},";
    jsonData += "\"horarioRegistro\": {\"timestampValue\": \"" + timestampFirestore + "\"}";
    jsonData += "}}";

    // Envio para o Firebase
    String path = "https://firestore.googleapis.com/v1/projects/" + projectID + "/databases/(default)/documents/" + collectionID + "?key=" + firebaseAuth;

    http.begin(path.c_str());
    http.addHeader("Content-Type", "application/json");

    int httpResponseCode = http.POST(jsonData);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    } else {
      Serial.print("Erro no envio dos dados: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("Erro na conexão WiFi");
  }

  delay(3600000); 
}

// Função para calcular CO (MQ-7)
float calculatePPMCO(int sensorValue) {
  float ppm = (sensorValue / 1023.0) * 1000.0;
  return ppm;
}

// Função para calcular CO₂ (MQ-135)
float calculatePPMCO2(int sensorValue) {
  float ppm = (sensorValue / 1023.0) * 2000.0;
  return ppm;
}
