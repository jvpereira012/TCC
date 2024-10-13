import { KeyboardAvoidingView, Platform, ScrollView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { Ionicons } from '@expo/vector-icons';
import { registroUsuario } from '../../functions'; // Importa a função de cadastro
export default function Cadastro() {
  const navigation = useNavigation<StackTypes>();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userDataNasc, setDataNasc] = useState('');
  const [userSenha, setSenha] = useState('');
  
  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;  // Formato para MySQL YYYY-MM-DD
  };

  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    try {
      if (!nomeUsuario || !userEmail || !userSenha || !confirmarSenha || !userDataNasc) {
        Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        return;
      }
      if (userSenha !== confirmarSenha) {
        Alert.alert('Erro', 'As senhas não correspondem.');
        return;
      }
      
      const formattedDate = formatDate(userDataNasc); // Converte a data
      const response = await registroUsuario(nomeUsuario, userEmail, userSenha, formattedDate); // Envia a data formatada
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login', { email: userEmail, senha: userSenha });
    } catch (error) {
      Alert.alert('Erro', 'Falha ao cadastrar usuário. Tente novamente.');
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
                onChangeText={setSenha}
                value={userSenha}
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
            <Text style={styles.textLabel}>Data de nascimento*</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Insira sua data de nascimento'
              dataDetectorTypes={'calendarEvent'}
              onChangeText={setDataNasc}
              value={userDataNasc}
            />
            <TouchableOpacity style={styles.buttonInput} onPress={handleCadastro}>
              <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold' }}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infButtons}>
            <TouchableOpacity onPress={() => { navigation.navigate('Login',{ email: userEmail, senha: userSenha }) }}>
              <Text style={styles.infButtonsText}>Já está registrado? Faça Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}



const styles = StyleSheet.create({
  formView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  container: {
    flex: 1,
    backgroundColor: '#6cd7a3',
  },
  containerHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-3%',
    marginBottom: '8%',
  },
  imgContainer: {
    resizeMode: 'contain',
    marginBottom: -2,
    width: 170,
    height: 200,
  },
  textLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginBottom: 3,
    width: '100%',
    maxWidth: 250,
    textAlign: 'left',
    alignSelf: 'center',
  },
  buttonInput: {
    fontSize: 12.1,
    textAlign: 'center',
    borderRadius: 8,
    color: '#fff',
    backgroundColor: '#00Bf63',
    marginTop: 10,
    marginBottom: -30,
    width: '75%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textInput: {
    fontSize: 10.1,
    borderRadius: 15,
    backgroundColor: '#fff',
    width: '75%',
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '75%',
    height: 50,
    marginBottom: 12,
  },
  textInputPassword1: {
    flex: 1,
    fontSize: 10.1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textInputPassword2: {
    flex: 1,
    fontSize: 10.1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  showPasswordButton: {
    paddingHorizontal: 10,
  },
  titletext: {
    fontSize: 30,
    fontFamily: 'Lovelo',
    marginBottom: 5,
    textAlign: 'center',
  },
  infButtons: {
    paddingVertical: '15%',
    alignItems: 'center',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 25,
  },
  infButtonsText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold'
  }
});
