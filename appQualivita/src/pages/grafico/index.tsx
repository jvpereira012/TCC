import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { db } from '../../services/firebaseConfigs';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { StackTypes } from '../../routes';
import { DadosRegistro } from '../grafico/components';

export default function HistoricoDados() {
  const [registros, setRegistros] = useState<
    {
      idSensor: string;
      bairro: string;
      rua: string;
      dia: string;
      temperatura: string | number;
      umidade: string | number;
      infCO: string | number;
      infCO2: string | number;
    }[]
  >([]);
  const [carregamento, setCarregamento] = useState(false);
  const navigation = useNavigation<StackTypes>();

  const getInf = async () => {
    setCarregamento(true);
    try {
      const q = query(
        collection(db, 'sensores'),
        orderBy('horarioRegistro', 'desc'),
      );

      const querySnapshot = await getDocs(q);
      const docs: {
        idSensor: string;
        bairro: string;
        rua: string;
        dia: string;
        temperatura: string | number;
        umidade: string | number;
        infCO: string | number;
        infCO2: string | number;
      }[] = [];

      querySnapshot.forEach(doc => {
        const data = doc.data();
        const timestamp = data.horarioRegistro?.seconds;
        const formattedDate = timestamp
          ? new Date(timestamp * 1000).toLocaleDateString('pt-BR')
          : "Data não disponível";

        docs.push({
          idSensor: doc.id,
          bairro: data.bairro || "N/A",
          rua: data.rua || "N/A",
          dia: formattedDate,
          temperatura: data.temperatura ?? "N/A",
          umidade: data.umidade ?? "N/A",
          infCO: data.infCO ?? "N/A",
          infCO2: data.infCO2 ?? "N/A",
        });
      });

      setRegistros(docs);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setCarregamento(false);
    }
  };

  useEffect(() => {
    getInf();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Histórico de dados</Text>
      <Text style={styles.textoPrincipal}>NÚMERO DO SENSOR: 1</Text>
      <Text style={styles.textoSecundario}>Santa Rosa, Hilda Rosa de Jesus</Text>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {registros.map((registro, index) => (
          <DadosRegistro key={index} {...registro} />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.refreshButton} onPress={getInf} disabled={carregamento}>
        {carregamento ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.refreshText}>
            <AntDesign name="reload1" size={20} color="#fff" /> Atualizar
          </Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

