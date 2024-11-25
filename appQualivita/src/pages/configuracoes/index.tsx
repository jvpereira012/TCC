import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from './styles';
import { StackTypes } from '../../routes';
import { useNavigation } from '@react-navigation/native';

export default function Configuracoes() {
  const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CONFIGURAÇÕES</Text>
      </View>

      <View style={styles.options}>

        <View style={styles.optionTitle}>
          <Ionicons name="person-circle" size={30} color="#c4c4c4" style={styles.optionIcon} />
          <Text style={styles.optionText}>Usuário</Text>
        </View>

        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('Perfil')}>
          <View style={styles.optionIcon}>
          </View>
          <Text style={styles.optionTextBold}>Informações pessoais</Text>
        </TouchableOpacity>

        <View style={styles.optionTitle}>
          <MaterialIcons name="sensors" size={30} color="#c4c4c4" style={styles.optionIcon} />
          <Text style={styles.optionText}>Sensores</Text>
        </View>

        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('infSensores')}>
          <View style={styles.optionIcon}>
          </View>
          <Text style={styles.optionTextBold}>Como nossos sensores funcionam</Text>
        </TouchableOpacity>

        <View style={styles.optionTitle}>
          <Ionicons name="clipboard" size={24} color="#c4c4c4" style={styles.optionIcon} />
          <Text style={styles.optionText}>Configurações universais</Text>
        </View>

        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('PrivacidadeeSeguranca')}>
          <Text style={styles.optionTextBold}>Privacidade e segurança</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('TermosdeUso')}>
          <Text style={styles.optionTextBold}>Termos de uso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}