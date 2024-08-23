import { Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
export default function Configuracoes() {
    return (
      <SafeAreaView style={styles.container}>
        <Text> Ainda em desenvolvimento</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  }
})