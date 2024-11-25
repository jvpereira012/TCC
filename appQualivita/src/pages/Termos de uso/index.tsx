import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { StackTypes } from '../../routes';

export default function TermosDeUso() {
    const navigation = useNavigation<StackTypes>();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Termos de Uso</Text>
            </View>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.contentText}>
                    Bem-vindo(a) ao nosso aplicativo! Ao utilizar nossos serviços, você concorda com os seguintes termos e condições.
                    Por favor, leia atentamente para entender seus direitos e responsabilidades.
                </Text>

                <Text style={styles.contentText}>
                    **Uso do Aplicativo:** O uso do aplicativo é restrito a maiores de 18 anos ou menores com autorização legal.
                    Você concorda em utilizar o aplicativo apenas para fins lícitos e dentro dos limites estabelecidos pela lei.
                </Text>

                <Text style={styles.contentText}>
                    **Coleta de Dados:** Coletamos informações para melhorar sua experiência. Todas as informações pessoais são
                    tratadas de acordo com nossa Política de Privacidade, que garante transparência e segurança.
                </Text>

                <Text style={styles.contentText}>
                    **Limitação de Responsabilidade:** Não nos responsabilizamos por qualquer dano direto ou indireto causado
                    pelo uso inadequado do aplicativo, incluindo acessos não autorizados ou perda de informações.
                </Text>

                <Text style={styles.contentText}>
                    **Alterações nos Termos:** Reservamo-nos o direito de atualizar estes termos a qualquer momento. Recomendamos
                    que você revise periodicamente as atualizações disponíveis no aplicativo.
                </Text>

                <Text style={styles.contentText}>
                    Ao continuar utilizando nossos serviços, você reconhece que leu, entendeu e concordou com todos os pontos
                    apresentados neste documento.
                </Text>
            </ScrollView>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={24} color="#fff" />
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
