import { KeyboardAvoidingView, ScrollView, Platform, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebaseConfigs';

export default function Login() {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregamento, setCarregamento] = useState(false);
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
    setCarregamento(true);
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
       
        const user = userCredential.user;
        setCarregamento(false);
        console.log("Usuário logado", user);
        setEmail('');
        setSenha('');
        navigation.navigate('TabNavigator');
      })
      .catch((error) => {
        setCarregamento(false);
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
            onPress={handleLogin}
            disabled={carregamento} 
          >
            {carregamento ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold' }}>ENTRAR</Text>
            )}
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
