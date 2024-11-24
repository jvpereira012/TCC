import React from 'react';
import {Text, View, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles';

export default function Configuracoes() {
    
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CONFIGURAÇÕES</Text>
      </View>

      {/* Lista de Opções */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionIcon}>
            <Ionicons name="person-circle" size={24} color="#c4c4c4" />
          </View>
          <Text style={styles.optionTextBold}>Informações pessoais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionIcon}>
          
          </View>
          <Text style={styles.optionTextBold}>Como nossos sensores funcionam</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <View style={styles.optionIcon}>
            <Ionicons name="clipboard" size={24} color="#c4c4c4" />
          </View>
          <Text style={styles.optionTextBold}>Configurações universais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionTextBold}>Privacidade e segurança</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionTextBold}>Termos de uso</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

