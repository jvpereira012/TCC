import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animation from 'react-native-animatable';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Boasvindas2() {
    const navigation = useNavigation<StackTypes>();
    return (
      <View style={styles.container}>
            <Text style={styles.title}> CONSCIENTIZE-SE</Text>
            <View>
                <Image 
                    source={require('../../../assets/iconeseimagens_app/imagem2.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                />
            </View>
            <View>
                <Text style={styles.subtitle}>
                    Saiba como a qualidade do ar interfere na sua vida
                </Text>
                </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity onPress={() => navigation.navigate('Boasvindas')}>
                    <View style={styles.buttonView}>
                        <AntDesign name="arrowleft" size={60} color="white" />
                        <Text style={styles.buttonText}>VOLTAR</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Boasvindas3')}>
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
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingHorizontal: 1, 
        marginTop: 'auto', 
        width: '101%', 
    },
    title: {
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Lovelo',
        fontSize: 32.5,
        color: '#fff',
        marginBottom: 10,
        margin: 3,
    },
    subtitle: {
        fontFamily:'Poppins-SemiBold',
        textAlign: 'center',
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
