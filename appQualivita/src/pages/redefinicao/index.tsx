import { KeyboardAvoidingView, ScrollView, Platform, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { sendPasswordResetEmail } from 'firebase/auth';
import { styles } from './styles';
import { auth } from '../../services/firebaseConfigs';

export default function Redefinicao() {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState('');
  const [carregamento, setCarregamento] = useState(false);

  function redefinirsenha() {
    setCarregamento(true);
    if (email !== '') {
      setCarregamento(true);
      sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Mensagem", `Foi enviada uma mensagem para ${email}, verifique seu email!`);
        setCarregamento(false);
        navigation.navigate("Login");
        setEmail('');
      })
      .catch((error) => {
          setCarregamento(false);
          Alert.alert("OPS!", error.message + " Tente novamente!");
        });
      } else {
      setCarregamento(false);
      Alert.alert("Mensagem", "É necessário informar o email para redefinir sua senha.");
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.containerHeader}>
          <Image
            source={require('../../../assets/iconnoname.png')}
            style={styles.imgContainer}
          />
          <Text style={styles.titletext}>RECUPERAÇÃO DE SENHA</Text>
          <Text style={styles.subtitle}>INSIRA SEU EMAIL PARA REDEFINIR SUA SENHA</Text>
        </View>
        <View style={styles.formView}>
          <Text style={styles.textLabel}>EMAIL*</Text>
          <TextInput
            style={styles.textInput}
            placeholder='Insira seu email'
            keyboardType='email-address'
            onChangeText={setEmail}
            value={email}
          />
          <TouchableOpacity
              style={styles.buttonInput}
              onPress={redefinirsenha}
              disabled={carregamento}
            >
              {carregamento ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold' }}>ENVIAR</Text>
              )}
            </TouchableOpacity>
          <TouchableOpacity style={styles.infButtons} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.infButtonsText}>Vá para a tela de login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

