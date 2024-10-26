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
          <AntDesign name="arrowleft" size={24} color="#efebef" />
          </TouchableOpacity>
        <Text style={styles.title}>Histórico de dados</Text>

        <View style={styles.dadosBox}>
    <Text style={styles.textoPrincipal}>Id sensor: 1</Text>
    <Text style={styles.textoSecundario}>Santa Rosa, Hilda Rosa de Jesus</Text>
    <Text style={styles.textoPrincipal}>dados: 20/10/2024</Text>
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
      flexDirection: 'column',
      justifyContent: 'flex-start',
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
      marginTop: 5
  },
    BackBottom: {
      position: 'absolute',
      bottom: '5%',
      right: '85%',
      backgroundColor: '#00bf63',
      padding: 10,
      borderRadius: 100,
      elevation: 5,
  }
  })