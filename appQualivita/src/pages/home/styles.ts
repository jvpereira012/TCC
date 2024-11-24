import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      flex: 1,
      width: '100%',
    },
    infoBox: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      padding: 15,
      backgroundColor: '#efebef',
      borderRadius: 10,
      elevation: 10,
    },
    infoText: {
      fontSize: 16,
      marginVertical: 2,
      fontFamily: 'Lovelo',
      color: '#00bf63',
    },
    infoTitulo: {
      fontSize: 20,
      marginVertical: 2,
      textAlign: 'center',
      fontFamily: 'Lovelo',
      marginBottom: 15,
    },
    myLocationButton: {
      position: 'absolute',
      bottom: 85,
      right: 20,
      backgroundColor: '#00bf63',
      padding: 10,
      borderRadius: 100,
      elevation: 5,
    },
    mapTypeButton: {
      position: 'absolute',
      bottom: 30,
      right: 20,
      backgroundColor: '#00bf63',
      padding: 10,
      borderRadius: 100,
      elevation: 5,
    },
  });
  