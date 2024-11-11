import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { StackTypes } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native-animatable';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Graficos() {
    const navigation = useNavigation<StackTypes>();
    return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.BackBottom} onPress={() => { navigation.goBack()}}>
          <AntDesign name="arrowleft" size={29} color="#efebef" />
          </TouchableOpacity>
        <Text style={styles.title}>Histórico de dados</Text>

        
    <Text style={styles.textoPrincipal}>NÚMERO DO SENSOR: 1</Text>
    <Text style={styles.textoSecundario}>Santa Rosa, Hilda Rosa de Jesus</Text>
    <View style={styles.dadosBox}>
    <Text style={styles.textoPrincipal}>DATA: 20/10/2024</Text>
    <View style={styles.dadosSensor}>
      <Text style={styles.textoSensor}>Temperatura: 24ºC</Text>
      <Text style={styles.textoSensor}>Umidade: 52%</Text>
      <Text style={styles.textoSensor}>ppm CO2: 1520</Text>
      <Text style={styles.textoSensor}>ppm CO: 1220</Text>
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
      fontFamily: 'Lovelo',
      fontSize: 26,
      color: '#00bf63',
      marginTop: 40,
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
  },
    textoCondicao: {
      fontSize: 14,
      color: '#4CAF50',
      marginTop: 5
  },
    BackBottom: {
      position: 'absolute',
      bottom: '5%',
      right: '80%',
      backgroundColor: '#00bf63',
      padding: 15,
      borderRadius: 100,
      elevation: 5,
  }
  })