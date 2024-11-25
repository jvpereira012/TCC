import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';

export default function FuncionamentoSensores() {
  const navigation = useNavigation<StackTypes>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Funcionamento dos Sensores</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.contentText}>
          Os sensores utilizados em nosso sistema são dispositivos projetados para capturar dados ambientais em tempo real,
          permitindo uma experiência personalizada e eficiente para o usuário.

          Eles são capazes de monitorar condições como:
        </Text>

        <Text style={styles.listItem}>- Temperatura;</Text>
        <Text style={styles.listItem}>- Umidade;</Text>
        <Text style={styles.listItem}>- Qualidade do ar.</Text>

        <Text style={styles.contentText}>
          O funcionamento dos sensores é baseado em tecnologias avançadas, garantindo precisão e confiabilidade.
          Esses dispositivos integram-se ao aplicativo para oferecer análises detalhadas e acionamentos automáticos
          conforme as necessidades do ambiente.

          Principais características:
        </Text>

        <Text style={styles.listItem}>- Monitoramento contínuo e em tempo real;</Text>
        <Text style={styles.listItem}>- Alta precisão, mesmo em condições adversas;</Text>
        <Text style={styles.listItem}>- Fácil instalação e manutenção.</Text>

        <Text style={styles.contentText}>
          Antes de serem implementados, os sensores passam por rigorosos testes de qualidade para assegurar sua eficiência.
          Essa atenção aos detalhes nos permite oferecer produtos confiáveis que atendem às expectativas de nossos usuários.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
