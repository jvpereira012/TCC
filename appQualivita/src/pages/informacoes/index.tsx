import { Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { View } from 'react-native-animatable';
export default function Informacoes() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>DADOS DOS SENSORES</Text>

        <View style={styles.dadosBox}>
    <Text style={styles.textoPrincipal}>Cidade: São José dos Campos</Text>
    <Text style={styles.textoSecundario}>Bairro: Santa Rosa</Text>
    <Text style={styles.textoSecundario}>Rua: Hilda Rosa de Jesus</Text>
    <View style={styles.dadosSensor}>
      <Text style={styles.textoSensor}>temp: 24º</Text>
      <Text style={styles.textoSensor}>umidade: 52%</Text>
      <Text style={styles.textoCondicao}>Condição do ar: boa</Text>
    </View>
  </View>
      </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor: '#f8f7f2',
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#00bf63',
    marginBottom: 50,
    margin: 17 ,
},
  dadosBox: {
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    marginVertical: 10,
},
  textoPrincipal: {
    fontSize: 16,
    fontWeight: 'bold',
},
  textoSecundario: {
    fontSize: 14,
    marginVertical: 2,
},
  dadosSensor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
},
  textoSensor: {
    fontSize: 14,
    color: '#4CAF50',
},
  textoCondicao: {
    fontSize: 14,
    color: '#4CAF50',
}
})