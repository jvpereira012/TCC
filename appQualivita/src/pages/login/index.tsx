import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';

export default function Login() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image 
          source={require('../../../assets/icon.png')}
          style={styles.imgContainer}
        />
        <Text style={styles.titletext}>Login</Text>
        <Text>ENTRE NA PLATAFORMA PARA CONTINUAR</Text>
      </View>
      <View style={styles.formView}>
          <Text style={styles.textLabel}>EMAIL*</Text>
          <TextInput 
            style={styles.textInput}
            placeholder='Insira seu email'
        />
        <Text style={styles.textLabel}>SENHA*</Text>
        <TextInput 
          style={styles.textInput}
          placeholder='Insira sua senha'
          secureTextEntry={true}
          
        />
        <TouchableOpacity style={styles.buttonInput} onPress={() => {navigation.navigate('Home')}}>
          <Text style={{ color: '#fff' }}>ENTRAR</Text>
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
          <Image 
            source={require('../../../assets/iconeseimagens_app/icon3.png')}
            style={{ width: 45, height: 45 }}
          />
        </TouchableOpacity>
      </View>
    </View>
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
  titletext: {
    fontSize: 24.2,
    fontWeight: 'bold',
    marginBottom: 10, 
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
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
