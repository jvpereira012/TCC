import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { Ionicons } from '@expo/vector-icons';
import { loginUsuario } from '../../functions'; // Supondo que a função de login está em um arquivo separado

export default function Login() {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Função chamada ao pressionar o botão de login
  const handleLogin = async () => {
    try {
      const result = await loginUsuario(email, senha); // Chama a função de login
      if (result.success) {
        // Redireciona o usuário para a tela Home
        navigation.navigate('TabNavigator');
      } else {
        // Exibe uma mensagem de erro se o login falhar
        Alert.alert('Erro', result.message || 'Erro ao fazer login');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o login. Tente novamente mais tarde.');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Image source={require('../../../assets/iconnoname.png')} style={styles.imgContainer} />
            <Text style={styles.titletext}>LOGIN</Text>
            <Text style={styles.subtitle}>ENTRE NA PLATAFORMA PARA CONTINUAR</Text>
          </View>

          <View style={styles.formView}>
            <Text style={styles.textLabel}>EMAIL*</Text>
            <TextInput 
              style={styles.textInput}
              placeholder='Insira seu email'
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.textLabel}>SENHA*</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.textInputPassword}
                placeholder='Insira sua senha'
                secureTextEntry={secureTextEntry}
                value={senha}
                onChangeText={setSenha}
              />
              <TouchableOpacity style={styles.showPasswordButton} onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color='gray' />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonInput} onPress={handleLogin}>
              <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold' }}>ENTRAR</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infButtons}>
            <TouchableOpacity>
              <Text style={styles.infButtonsText}>Esqueceu a sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Cadastro') }}>
              <Text style={styles.infButtonsText}>Não tem uma conta? CADASTRE-SE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonIcon}>
              <Image source={require('../../../assets/iconeseimagens_app/icon3.png')} style={{ width: 45, height: 45 }} />
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
    marginTop: '-8%',
    marginBottom: '8%',
  },
  imgContainer: {
    resizeMode: 'contain',
    width: 220,
    height: 270,
  },
  textLabel: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
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
    marginTop: 10,
    color: '#fff',
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
  textInputPassword: {
    flex: 1,
    fontSize: 10.1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  showPasswordButton: {
    paddingHorizontal: 10,
  },
  titletext: {
    fontSize: 45,
    fontFamily: 'Lovelo',
    marginBottom: 10,
    marginTop: -30,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
    width: 200,
  },
  buttonIcon: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  infButtons: {
    paddingVertical: '5%',
    alignItems: 'center',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  infButtonsText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    textAlign: 'center',
  },
});
