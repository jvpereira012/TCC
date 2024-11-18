import { KeyboardAvoidingView, ScrollView, Platform, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { sendPasswordResetEmail } from 'firebase/auth';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6cd7a3',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -50, 
  },
  containerHeader: {
    marginTop: '-15%',
    alignItems: 'center',
    marginBottom: 20,
  },
  imgContainer: {
    resizeMode: 'contain',
    width: 200,
    height: 250,
  },
  titletext: {
    fontSize: 35,
    fontFamily: 'Lovelo',
    textAlign: 'center',
    marginTop: '-10%',
  },
  subtitle: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
    paddingHorizontal: 10,
  },
  formView: {
    width: '100%',
    alignItems: 'center',
  },
  textLabel: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    alignSelf: 'flex-start',
    marginLeft: '6%',
    marginBottom: 5,
  },
  textInput: {
    fontSize: 14,
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '90%',
  },
  buttonInput: {
    borderRadius: 8,
    backgroundColor: '#00Bf63',
    paddingVertical: 10,
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  infButtons: {
    marginTop: 15,
    alignItems: 'center',
  },
  infButtonsText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
});
