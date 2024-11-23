import { View, Text, StyleSheet } from "react-native";

interface DadosRegistroProps {
  idSensor: string;
  bairro: string;
  rua: string;
  dia: string;
  temperatura: number | string; // Pode ser um número ou "N/A"
  umidade: number | string;     // Pode ser um número ou "N/A"
  infCO: number | string;       // Pode ser um número ou "N/A"
  infCO2: number | string;      // Pode ser um número ou "N/A"
}

export function DadosRegistro({
  dia,
  temperatura,
  umidade,
  infCO,
  infCO2,
}: DadosRegistroProps) {
  return (
    <View style={styles.dadosBox}>
      
      <Text style={styles.textoPrincipal}>DATA: {dia}</Text>
      <View style={styles.dadosSensor}>
        <Text style={styles.textoSensor}>
          Temperatura: {typeof temperatura === 'number' ? `${temperatura}ºC` : temperatura}
        </Text>
        <Text style={styles.textoSensor}>
          Umidade: {typeof umidade === 'number' ? `${umidade}%` : umidade}
        </Text>
        <Text style={styles.textoSensor}>
          ppm CO2: {typeof infCO === 'number' ? infCO : infCO}
        </Text>
        <Text style={styles.textoSensor}>
          ppm CO: {typeof infCO2 === 'number' ? infCO2 : infCO2}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dadosBox: {
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    marginVertical: 10,
  },
  textoPrincipal: {
    fontSize: 17,
    fontFamily: 'Poppins-SemiBold'
  },
  textoSecundario: {
    fontSize: 15,
    fontFamily: 'Poppins',
    marginVertical: 2,
  },
  dadosSensor: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  textoSensor: {
    fontSize: 15,
    fontFamily: 'Poppins',
    color: '#4CAF50',
  }
});