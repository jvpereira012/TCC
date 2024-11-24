import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f8f7f2',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      fontFamily: 'Lovelo',
      fontSize: 26,
      color: '#00bf63',
      marginTop: 40,
      marginBottom: 45,
      margin: 17,
    },
    dadosBox: {
      backgroundColor: '#d9d9d9',
      borderRadius: 10,
      padding: 15,
      width: '90%',
      marginVertical: 10,
    },
    textoPrincipal: {
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
    },
    textoSecundario: {
      fontSize: 14,
      fontFamily: 'Poppins',
      marginVertical: 2,
    },
    dadosSensor: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    textoSensor: {
      fontSize: 20,
      fontFamily: 'Poppins',
      color: '#4CAF50',
      paddingHorizontal: 10,
    },
    infoButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#f0f0f0',
      borderRadius: 100,
      padding: 15,
    },
    infoBox: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: '#efebef',
      borderRadius: 10,
      padding: 15,
      elevation: 10,
    },
    infoText: {
      fontSize: 16,
      marginVertical: 5,
      fontFamily: 'Poppins',
    },
    closeButton: {
      position: 'absolute',
      top: -5,
      right: 5,
      padding: 10,
    },
    refreshButton: {
      marginTop: 20,
      backgroundColor: '#00bf63',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    refreshText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
    }
  });