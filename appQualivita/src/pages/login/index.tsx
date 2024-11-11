import { KeyboardAvoidingView, ScrollView, Platform, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebaseConfigs';

export default function Login() {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário já autenticado:", user);
        navigation.navigate('TabNavigator');  
      }
    });
    return unsubscribe;
  }, []);

  function handleLogin () {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário logado", user);
        navigation.navigate('TabNavigator');
      })
      .catch((error) => {
        Alert.alert("Erro de login", error.message);
      });
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
          <Text style={styles.titletext}>LOGIN</Text>
          <Text style={styles.subtitle}>ENTRE NA PLATAFORMA PARA CONTINUAR</Text>
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
          <Text style={styles.textLabel}>SENHA*</Text>
          <View style={styles.passwordContainer}>
            <TextInput 
              style={styles.textInputPassword}
              placeholder='Insira sua senha'
              secureTextEntry={secureTextEntry}
              onChangeText={setSenha}
              value={senha}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            >
              <Ionicons 
                name={secureTextEntry ? 'eye-off' : 'eye'} 
                size={24} 
                color='gray' 
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity 
            style={styles.buttonInput} 
            onPress={handleLogin}>
            <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold' }}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infButtons}>
          <TouchableOpacity onPress={() => {navigation.navigate('Redefinicao')}}>
            <Text style={styles.infButtonsText}>Esqueceu a sua senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.infButtonsText}>Não tem uma conta? CADASTRE-SE</Text>
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
    marginTop: "-30%",
    resizeMode: 'contain',
    width: 220,
    height: 270,
  },
  titletext: {
    marginTop: "-10%",
    fontSize: 45,
    fontFamily: 'Lovelo',
    textAlign: 'center', 
  },
  subtitle: {
    fontFamily: 'Poppins',
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 50,
    marginBottom: 12,
  },
  textInputPassword: {
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 10,
  },
  showPasswordButton: {
    paddingHorizontal: 10,
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
  },
});
