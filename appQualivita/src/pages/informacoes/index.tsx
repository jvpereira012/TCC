import { Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated, View } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { StackTypes } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { db } from '../../services/firebaseConfigs';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';


export default function Informacoes() {
  const [temp, setTemp] = useState(null);
  const [cidade, setCidade] = useState(null);
  const [rua, setRua] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [umidade, setUmidade] = useState(null);
  const navigation = useNavigation<StackTypes>();
  const [showInfoBox, setShowInfoBox] = useState(false);
  const translateYAnim = useRef(new Animated.Value(300)).current;





  const getInf = async () => {
    try {
      const q = query(
        collection(db, 'sensores'), 
        orderBy('horarioRegistro', 'desc'), 
        limit(1) 
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0]; 
        const data = doc.data();
        console.log(data);
        setCidade(data.cidade);
        setRua(data.rua);
        setBairro(data.bairro);
        setTemp(data.temperatura);
        setUmidade(data.umidade);
      } else {
        console.log('Nenhum documento encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    getInf();
  }, []);



  const toggleInfoBox = () => {
    if (showInfoBox) {
      Animated.timing(translateYAnim, {
        toValue: 300, // Desce a caixinha para fora da tela
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowInfoBox(false));
    } else {
      setShowInfoBox(true);
      Animated.timing(translateYAnim, {
        toValue: 0, // Sobe a caixinha na tela
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>DADOS DOS SENSORES</Text>

      <TouchableOpacity onPress={() => { navigation.navigate('Graficos') }}>
        <View style={styles.dadosBox}>
          <Text style={styles.textoPrincipal}>Cidade: {cidade}</Text>
          <Text style={styles.textoSecundario}>Bairro: {bairro}</Text>
          <Text style={styles.textoSecundario}>Rua: {rua}</Text>
          <View style={styles.dadosSensor}>
            <Text style={styles.textoSensor}><Feather name="sun" size={20} /> {temp}ºC</Text>
            <Text style={styles.textoSensor}><MaterialCommunityIcons name="water-outline" size={20} />{umidade}% </Text>
            <Text style={styles.textoSensor}><Entypo name="air" size={20} /> Bom</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Botão de informações no canto direito */}
      <TouchableOpacity style={styles.infoButton} onPress={toggleInfoBox}>
        <AntDesign name="questioncircleo" size={29} color="#00bf63" />
      </TouchableOpacity>

      {/* Caixinha de informações animada */}
      {showInfoBox && (
        <Animated.View style={[styles.infoBox, { transform: [{ translateY: translateYAnim }] }]}>
          <TouchableOpacity style={styles.closeButton} onPress={() => toggleInfoBox()}>
            <AntDesign name="close" size={29} color="black" />
          </TouchableOpacity>
          <Text style={styles.infoText}><Feather name="sun" size={20} color='#00bf63' />  Temperatura ambiente</Text>
          <Text style={styles.infoText}><MaterialCommunityIcons name="water-outline" size={20} color='#00bf63' />  Umidade no local</Text>
          <Text style={styles.infoText}><Entypo name="air" size={20} color='#00bf63' />  Qualidade do ar</Text>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f7f2',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Lovelo',
    fontSize: 26,
    color: '#00bf63',
    marginTop: 40,
    marginBottom: 45,
    margin: 17,
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
    fontFamily: 'Poppins-SemiBold',
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
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#4CAF50',
    paddingHorizontal: 10,
  },
  infoButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
    padding: 15,
  },
  infoBox: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#efebef',
    borderRadius: 10,
    padding: 15,
    elevation: 10,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'Poppins',
  },
  closeButton: {
    position: 'absolute',
    top: -5,
    right: 5,
    padding: 10,
  },
});







