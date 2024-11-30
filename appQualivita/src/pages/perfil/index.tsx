import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { auth, db } from '../../services/firebaseConfigs'; // Certifique-se de configurar o Firebase Firestore ou Realtime Database
import { StackTypes } from '../../routes';
import { doc, getDoc } from 'firebase/firestore'; // Para Firestore

interface UserProfile {
  nome: string;
  email: string;
  dataNascimento: string;
}

export default function Perfil() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const navigation = useNavigation<StackTypes>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const docRef = doc(db, 'usuarios', currentUser.uid); 
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserProfile(docSnap.data() as UserProfile);
          } else {
            Alert.alert('Erro', 'Usuário não encontrado no banco de dados.');
          }
        } catch (error) {
          Alert.alert('Erro', 'Não foi possível carregar os dados do usuário.');
        }
      } else {
        navigation.navigate('Login'); 
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert('Logout', 'Você saiu da conta com sucesso!');
        navigation.navigate('Login');
      })
      .catch((error) => {
        Alert.alert('Erro ao sair', error.message);
      });
  };

  if (!userProfile) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando informações do usuário...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil do Usuário</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{userProfile.nome || 'Não informado'}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userProfile.email}</Text>

        <Text style={styles.label}>Data de Nascimento:</Text>
        <Text style={styles.value}>{userProfile.dataNascimento || 'Não informado'}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
