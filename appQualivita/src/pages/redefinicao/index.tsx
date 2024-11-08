import { KeyboardAvoidingView, ScrollView, Platform, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebaseConfigs';

export default function Redefinicao() {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState('');

  function redefinirsenha() {
    if (email !== '') {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Alert.alert("Mensagem", `Foi enviada uma mensagem para ${email}, verifique seu email!`);
          navigation.navigate("Login");
        })
        .catch((error) => {
          Alert.alert("OPS!", error.message + " Tente novamente!");
        });
    } else {
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
          <Text style={styles.subtitle}>INSIRA SEU EMAIL PARA FAZER A AUTENTIFICAÇÃO NO APP</Text>
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
            onPress={redefinirsenha}>
            <Text style={styles.buttonText}>ENVIAR</Text>
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
    alignItems: 'center',
    marginBottom: 30,
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
    marginTop: 10,
  },
  subtitle: {
    fontFamily: 'Lovelo',
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
    marginLeft: 10,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 14,
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
  },
  buttonInput: {
    borderRadius: 8,
    backgroundColor: '#00Bf63',
    paddingVertical: 12,
    alignItems: 'center',
    width: '100%',
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
    color: '#333',
  },
});
