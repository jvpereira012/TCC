import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


export default function Boasvindas() {
  const navigation = useNavigation();
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
                    TENHA ACESSO AOS DADOS DE NOSSOS SENSORES
                </Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Boasvindas2')}
                >
                    <View style={styles.buttonView}>
                        <Image 
                            source={require('../../../assets/iconeseimagens_app/seta.png')}
                            style={{width: 64, height: 64,}}
                            resizeMode='contain'
                        />
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
        paddingBottom: 20,
        paddingRight: 20,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 32.5,
        color: '#fff',
        marginBottom: 6,
        margin: 3,
    },
    subtitle: {
        textAlign: 'center',
        fontWeight: 'bold',
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
        fontWeight: 'bold',
        fontSize: 14.4,
        color: '#fff',
        marginTop: 5,
    }
});
