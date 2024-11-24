import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StackTypes } from '../../routes';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles';


export default function Boasvindas() {
  const navigation = useNavigation<StackTypes>();
    return (
      <View style={styles.container}>
          
            <Text style={styles.title}>MONITORE A QUALIDADE DO AR</Text>
            <View>
                <Image 
                    source={require('../../../assets/iconeseimagens_app/imagem1.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text style={styles.subtitle}>
                    Tenha acesso aos dados de nossos sensores
                </Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Boasvindas2')}
                >
                    <View style={styles.buttonView}>
                        <AntDesign name="arrowright" size={60} color="white" />                 
                        <Text style={styles.buttonText}>PRÓXIMO</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

