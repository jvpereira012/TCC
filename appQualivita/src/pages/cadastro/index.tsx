import { KeyboardAvoidingView, Platform, ScrollView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import {
  createUserWithEmailAndPassword, updateProfile
} from 'firebase/auth';
import { auth, db } from '../../services/firebaseConfigs';
import { doc, setDoc } from 'firebase/firestore';

export default function Cadastro() {
  const navigation = useNavigation<StackTypes>();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [carregamento, setCarregamento] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userDataNasc, setDataNasc] = useState('');
  const [userSenha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  function formatarDataParaBanco(data: string): string {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`;
  }

  const fazercadastro = () => {
    setCarregamento(true);
    if (!nomeUsuario || !userEmail || !userDataNasc || !userSenha || !confirmarSenha) {
      setCarregamento(false);
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }

    if (userSenha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    const dataFormatada = formatarDataParaBanco(userDataNasc);
    setCarregamento(true);
    createUserWithEmailAndPassword(auth, userEmail, userSenha)
      .then((userCredential) => {
        const user = userCredential.user;
        setCarregamento(false);
        console.log("Usuário cadastrado", user);

        updateProfile(user, {
          displayName: nomeUsuario,
        })
          .then(() => {
            console.log("Perfil cadastrado com sucesso!");
            setCarregamento(false);
            salvarDadosAdicionais(user.uid, dataFormatada);
          })

          .catch((error) => {
            setCarregamento(false);
            console.error("Erro ao atualizar o perfil:", error);
            Alert.alert("Erro", "Falha ao atualizar o perfil do usuário.");
          });
      })
      .catch((error) => {
        setCarregamento(false);
        console.error("Erro ao criar usuário:", error.message);
        Alert.alert("Erro", error.message);
      });
  };


  const salvarDadosAdicionais = async (userId: string, dataNascimento: string) => {
    try {
      setCarregamento(true);
      await setDoc(doc(db, "usuarios", userId), {
        nome: nomeUsuario,
        dataNascimento: dataNascimento,
        email: userEmail,
        userID: userId,
      });
      setCarregamento(false);
      setEmail('');
      setSenha('');
      setDataNasc('');
      setNomeUsuario('');
      setConfirmarSenha('');
      console.log("Dados adicionais salvos no Firestore!");
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate('Login');
    } catch (error) {
      setCarregamento(false);
      console.error("Erro ao salvar dados adicionais no Firestore:", error);
      Alert.alert("Erro", "Falha ao salvar dados adicionais.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Image
              source={require('../../../assets/iconnoname.png')}
              style={styles.imgContainer}
            />
            <Text style={styles.titletext}>Crie sua conta</Text>
          </View>
          <View style={styles.formView}>
            <Text style={styles.textLabel}>Nome de usuário*</Text>
            <TextInput
              style={styles.textInput}
              keyboardType='default'
              placeholder='Insira seu nome'
              onChangeText={setNomeUsuario}
              value={nomeUsuario}
            />
            <Text style={styles.textLabel}>Email*</Text>
            <TextInput
              style={styles.textInput}
              keyboardType='email-address'
              placeholder='Insira seu email'
              onChangeText={setEmail}
              value={userEmail}
            />
            <Text style={styles.textLabel}>Crie uma senha*</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.textInputPassword1}
                placeholder='Crie uma senha'
                secureTextEntry={secureTextEntry}
                onChangeText={setSenha}
                value={userSenha}
              />
            </View>
            <Text style={styles.textLabel}>Confirme sua senha*</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.textInputPassword2}
                placeholder='Confirme sua senha'
                secureTextEntry={secureTextEntry}
                onChangeText={setConfirmarSenha}
                value={confirmarSenha}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <Ionicons
                  name={secureTextEntry ? 'eye-off' : 'eye'}
                  size={24}
                  color='gray'
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.textLabel}>Data de nascimento*</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Insira sua data de nascimento (Dia/Mês/Ano)'
              keyboardType='default'
              onChangeText={setDataNasc}
              value={userDataNasc}
            />
            <TouchableOpacity
              style={styles.buttonInput}
              onPress={fazercadastro}
              disabled={carregamento}
            >
              {carregamento ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold' }}>CADASTRAR</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.infButtons}>
            <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
              <Text style={styles.infButtonsText}>Já está registrado? Faça Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

