import { KeyboardAvoidingView, ScrollView, Platform, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebaseConfigs';

export default function Redefinicao() {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState('');
  function redefinirsenha(){
    if(email !== ''){
      sendPasswordResetEmail(auth,email).then(() => {
        Alert.alert("Mensagem",`Foi enviada uma mensagem para ${email}, verifique seu email!`);
        navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert("OPS!" + error.message + "tente novamente!");
        return;
      })
    }
    else{
      Alert.alert("Mensagem","É necessário informar o email para redefinir sua senha.")
      return;
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
            <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold' }}>ENVIAR</Text>
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
  },
  containerHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imgContainer: {
    resizeMode: 'contain',
    width: 220,
    height: 270,
  },
  titletext: {
    fontSize: 45,
    fontFamily: 'Lovelo',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Lovelo',

    textAlign: 'center',
    fontSize: 14,
  },
  formView: {
    width: '80%',
  },
  textLabel: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 12,
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  buttonInput: {
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#00Bf63',
    paddingVertical: 10,
    alignItems: 'center',
  },
  infButtons: {
    alignItems: 'center',
    marginVertical: 20,
  },
  infButtonsText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textAlign: 'center',
  }
});
