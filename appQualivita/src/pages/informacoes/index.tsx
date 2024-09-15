import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { StackTypes } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native-animatable';

export default function Informacoes() {
  const navigation = useNavigation<StackTypes>();

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>DADOS DOS SENSORES</Text>

        <TouchableOpacity onPress={() => { navigation.navigate('Graficos') }}>
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
  </TouchableOpacity>
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
    fontFamily: 'Lovelo',
    fontSize: 20,
    color: '#00bf63',
    marginTop: 25,
    marginBottom: 45,
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
    fontFamily: 'Poppins-SemiBold'
},
  textoSecundario: {
    fontSize: 14,
    fontFamily: 'Poppins',
    marginVertical: 2,
},
  dadosSensor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
},
  textoSensor: {
    fontSize: 12,
    fontFamily: 'Poppins',
    color: '#4CAF50',
},
  textoCondicao: {
    fontSize: 14,
    color: '#4CAF50',
}
})