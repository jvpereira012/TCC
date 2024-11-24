import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f7f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
      fontFamily: 'Lovelo',
      fontSize: 26,
      color: '#00bf63',
      marginVertical: 20,
    },
    scrollView: {
      flexGrow: 1,
      width: '100%',
      paddingHorizontal: 20,
    },
    BackBottom: {
      position: 'absolute',
      bottom: '5%',
      right: '80%',
      backgroundColor: '#00bf63',
      padding: 15,
      borderRadius: 100,
      elevation: 5,
    },
    refreshButton: {
      backgroundColor: '#00bf63',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
      width: '90%',
    },
    refreshText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'center',
    },
    textoPrincipal: {
      fontSize: 16,
      fontFamily: 'Poppins-SemiBold'
    },
    textoSecundario: {
      fontSize: 14,
      fontFamily: 'Poppins',
      marginVertical: 2,
    },
  });
  