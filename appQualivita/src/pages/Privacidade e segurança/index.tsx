import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';

export default function PrivacidadeeSeguranca() {
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Privacidade e Segurança</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.contentText}>
          A sua privacidade e segurança são nossas maiores prioridades. Implementamos medidas rigorosas para garantir que
          seus dados estejam protegidos contra acessos não autorizados.

          Aqui está o que fazemos para proteger você:
        </Text>

        <Text style={styles.listItem}>- Criptografia de ponta a ponta para todas as comunicações;</Text>
        <Text style={styles.listItem}>- Armazenamento seguro de informações em servidores protegidos;</Text>
        <Text style={styles.listItem}>- Política de privacidade transparente, com controle total sobre seus dados.</Text>

        <Text style={styles.contentText}>
          Além disso, seguimos padrões internacionais de segurança e proteção de dados, como o GDPR, para garantir que
          todas as informações coletadas sejam tratadas de forma ética e responsável.

          Dicas para proteger sua conta:
        </Text>

        <Text style={styles.listItem}>- Use senhas fortes e exclusivas para sua conta;</Text>
        <Text style={styles.listItem}>- Não compartilhe suas credenciais com terceiros;</Text>
        <Text style={styles.listItem}>- Ative notificações de login em dispositivos desconhecidos.</Text>

        <Text style={styles.contentText}>
          Estamos comprometidos em atualizar continuamente nossas práticas de segurança para oferecer a você
          uma experiência confiável e segura.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
