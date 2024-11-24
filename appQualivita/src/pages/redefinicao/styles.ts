import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6cd7a3',
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: -50, 
    },
    containerHeader: {
      marginTop: '-15%',
      alignItems: 'center',
      marginBottom: 20,
    },
    imgContainer: {
      resizeMode: 'contain',
      width: 200,
      height: 250,
    },
    titletext: {
      fontSize: 35,
      fontFamily: 'Lovelo',
      textAlign: 'center',
      marginTop: '-10%',
    },
    subtitle: {
      fontFamily: 'Poppins',
      textAlign: 'center',
      fontSize: 14,
      marginTop: 5,
      paddingHorizontal: 10,
    },
    formView: {
      width: '100%',
      alignItems: 'center',
    },
    textLabel: {
      fontFamily: 'Poppins-Bold',
      fontSize: 13,
      alignSelf: 'flex-start',
      marginLeft: '6%',
      marginBottom: 5,
    },
    textInput: {
      fontSize: 14,
      borderRadius: 15,
      backgroundColor: '#fff',
      height: 50,
      paddingHorizontal: 15,
      marginBottom: 20,
      width: '90%',
    },
    buttonInput: {
      borderRadius: 8,
      backgroundColor: '#00Bf63',
      paddingVertical: 10,
      alignItems: 'center',
      width: '90%',
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontFamily: 'Poppins-Bold',
    },
    infButtons: {
      marginTop: 15,
      alignItems: 'center',
    },
    infButtonsText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 12,
    },
  });
  