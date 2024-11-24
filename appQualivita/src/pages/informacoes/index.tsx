import { Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated, View, ActivityIndicator } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { StackTypes } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { db } from '../../services/firebaseConfigs';
import { styles } from './styles';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export default function Informacoes() {
  let [temp, setTemp] = useState("Carregando...");
  let [cidade, setCidade] = useState("Carregando...");
  let [rua, setRua] = useState("Carregando...");
  let [bairro, setBairro] = useState("Carregando...");
  let [umidade, setUmidade] = useState("Carregando...");
  let [estado, setEstado] = useState('');
  let [cor, setCor] = useState('#4CAF50');
  let [corTexto, setCorTexto] = useState('#4CAF50');
  const [carregamento, setcarregamento] = useState(false);
  const navigation = useNavigation<StackTypes>();
  const [showInfoBox, setShowInfoBox] = useState(false);
  const translateYAnim = useRef(new Animated.Value(300)).current;

  const getInf = async () => {
    setcarregamento(true);
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

        let co2 = data.infCO2;
        if (co2 >= 400 && co2 <= 750) {
          setCor('#4CAF50');
          setCorTexto('#4CAF50');
          setEstado('Boa');
        }
        else if (co2 > 750 && co2 <= 1200) {
          setCor('#e8b501');
          setCorTexto('#e8b501');
          setEstado('Média');
        }
        else if (co2 > 1200) {
          setCor('#e61913');
          setCorTexto('#e61913');
          setEstado('Ruim')
        }
       
      } else {
        console.log('Nenhum documento encontrado.');

      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
    finally{
      setcarregamento(false);
    }
  };

  useEffect(() => {
    getInf();
  }, []);

  const toggleInfoBox = () => {
    if (showInfoBox) {
      Animated.timing(translateYAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowInfoBox(false));
    } else {
      setShowInfoBox(true);
      Animated.timing(translateYAnim, {
        toValue: 0,
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
            <Text style={{
                fontSize: 20,
                fontFamily: 'Poppins',
                paddingHorizontal: 10,
                color: corTexto
              }}>
               <Entypo name="air" size={20} color={cor} /> {estado}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoButton} onPress={toggleInfoBox}>
        <AntDesign name="questioncircleo" size={29} color='#00bf63'/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.refreshButton} onPress={getInf} disabled={carregamento}>
        {carregamento ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.refreshText}>
            <AntDesign name="reload1" size={20} color="#fff" /> Atualizar
          </Text>
        )}
      </TouchableOpacity>

      {showInfoBox && (
        <Animated.View style={[styles.infoBox, { transform: [{ translateY: translateYAnim }] }]}>
          <TouchableOpacity style={styles.closeButton} onPress={() => toggleInfoBox()}>
            <AntDesign name="close" size={29} color="black" />
          </TouchableOpacity>
          <Text style={styles.infoText}><Feather name="sun" size={20} color='#00bf63' />  Temperatura ambiente</Text>
          <Text style={styles.infoText}><MaterialCommunityIcons name="water-outline" size={20} color='#00bf63' />  Umidade no local</Text>
          <Text style={styles.infoText} ><Entypo name="air" size={20} color='#00bf63' />  Qualidade do ar</Text>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

