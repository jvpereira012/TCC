import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StackTypes } from '../../routes';
import AntDesign from '@expo/vector-icons/AntDesign';



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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00bf63',
        padding: 30,
    },
    containerButton: {
        flex: 1,
        backgroundColor: '#00bf63',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 'auto', 
        width: '101%', 
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Lovelo',
        fontSize: 32.5,
        color: '#fff',
        marginBottom: 10,
        marginTop:20,
        margin: 3,
    },
    subtitle: {
        textAlign: 'center',
        fontFamily:'Poppins-SemiBold',
        fontSize: 24.1,
        color: '#fff',
        margin: 4,
    },
    button: {
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonView: {
        alignItems: 'center',
    },
    buttonText: {
        fontFamily:'Poppins-Bold',
        fontSize: 14.4,
        color: '#fff',
        marginTop: 5,
    }
});
