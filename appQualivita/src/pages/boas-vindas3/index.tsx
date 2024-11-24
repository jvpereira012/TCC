import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animation from 'react-native-animatable';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles';
export default function Boasvindas3() {
    const navigation = useNavigation<StackTypes>();
    return (
      <View style={styles.container}>
          
            <Text style={styles.title}> FISCALIZE</Text>
            <View>
                <Image 
                    source={require('../../../assets/iconeseimagens_app/imagem3.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text style={styles.subtitle}>
                    Use os dados fornecidos para auxiliar em pesquisas e estudos
                </Text>
                </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity onPress={() => navigation.navigate('Boasvindas2')}>
                    <View style={styles.buttonView}>
                        <AntDesign name="arrowleft" size={60} color="white" />
                        <Text style={styles.buttonText}>VOLTAR</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.buttonView}>
                        <AntDesign name="arrowright" size={60} color="white" />
                        <Text style={styles.buttonText}>CONECTAR-SE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

