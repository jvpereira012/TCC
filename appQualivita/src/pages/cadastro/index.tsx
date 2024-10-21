import { KeyboardAvoidingView, Platform, ScrollView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { Ionicons } from '@expo/vector-icons';
import { registroUsuario } from '../../functions'; // Importa a função

export default function Cadastro() {
  const navigation = useNavigation<StackTypes>();
  const [nome, setNome] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const [datanasc, setDataNasc] = useState('');
  const [email, setEmail] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
              onChangeText={setNome}
              value={nome}
            />
            <Text style={styles.textLabel}>Email*</Text>
            <TextInput 
              style={styles.textInput}
              keyboardType='email-address'
              placeholder='Insira seu email'
              onChangeText={setEmail}
              value={email}
            />
            <Text style={styles.textLabel}>Crie uma senha*</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.textInputPassword1}
                placeholder='Crie uma senha'
                secureTextEntry={secureTextEntry}
                onChangeText={setSenha1}
                value={senha1}
              />
            </View>
            <Text style={styles.textLabel}>Confirme sua senha*</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.textInputPassword2}
                placeholder='Confirme sua senha'
                secureTextEntry={secureTextEntry}
                onChangeText={setSenha2}
                value={senha2}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              >
                <Ionicons name={secureTextEntry? 'eye-off' : 'eye'} size={24} color='gray' />
              </TouchableOpacity>
            </View>
            <Text style={styles.textLabel}>Data de nascimento*</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Insira sua data de nascimento (dd/mm/aaaa)'
              onChangeText={setDataNasc}
              value={datanasc}
            />
            <TouchableOpacity 
              style={styles.buttonInput} 
              onPress={() => registroUsuario(nome, email, senha1, senha2, datanasc, navigation)}
            >
              <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold' }}>CADASTRAR</Text>
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

// Estilos (os mesmos que você já tem)


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
    fontFamily:'Poppins-Bold',
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
    fontFamily:'Poppins-SemiBold'
  }
});
