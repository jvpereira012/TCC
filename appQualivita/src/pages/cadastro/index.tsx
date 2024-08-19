import { KeyboardAvoidingView, Platform, ScrollView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  const navigation = useNavigation<StackTypes>();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Image 
              source={require('../../../assets/icon.png')}
              style={styles.imgContainer}
            />
            <Text style={styles.titletext}>Cadastro</Text>
            <Text style={{ marginBottom: 40 }}>Insira suas informações nos campos abaixo</Text>
          </View>
          <View style={styles.formView}>
            <Text style={styles.textLabel}>EMAIL*</Text>
            <TextInput 
              style={styles.textInput}
              keyboardType='email-address'
              placeholder='Insira seu email'
            />
            <Text style={styles.textLabel}>Crie uma senha*</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.textInputPassword1}
                placeholder='Crie uma senha'
                secureTextEntry={secureTextEntry}
              />
            </View>
            <Text style={styles.textLabel}>Confirme sua senha*</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.textInputPassword2}
                placeholder='Confirme sua senha'
                secureTextEntry={secureTextEntry}
              />
              <TouchableOpacity
                style={styles.showPasswordButton}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              >
                <Ionicons 
                  name={secureTextEntry? 'eye-off' : 'eye'} 
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
            />
            <TouchableOpacity style={styles.buttonInput} onPress={() => { navigation.navigate('Login') }}>
              <Text style={{ color: '#fff' }}>CADASTRAR</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  imgContainer: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },
  textLabel: {
    fontSize: 14,
    marginBottom: 5, 
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
    fontWeight: 'bold',
    backgroundColor: '#00Bf63',
    marginBottom: 8,
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
    fontSize: 24.2,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  infButtons: {
    paddingVertical: '15%', 
    alignItems: 'center',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  infButtonsText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
