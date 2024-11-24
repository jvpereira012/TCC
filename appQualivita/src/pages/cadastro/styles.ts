import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '5%',
    },
    container: {
      flex: 1,
      backgroundColor: '#6cd7a3',
    },
    containerHeader: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '-3%',
      marginBottom: '8%',
    },
    imgContainer: {
      resizeMode: 'contain',
      marginBottom: -2,
      width: 170,
      height: 200,
    },
    textLabel: {
      fontSize: 14,
      fontFamily: 'Poppins-Bold',
      marginBottom: 3,
      width: '100%',
      maxWidth: 250,
      textAlign: 'left',
      alignSelf: 'center',
    },
    buttonInput: {
      fontSize: 12.1,
      textAlign: 'center',
      borderRadius: 8,
      color: '#fff',
      backgroundColor: '#00Bf63',
      marginTop: 10,
      marginBottom: -30,
      width: '75%',
      alignItems: 'center',
      paddingVertical: 10,
    },
    textInput: {
      fontSize: 10.1,
      borderRadius: 15,
      backgroundColor: '#fff',
      width: '75%',
      height: 50,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 12,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 15,
      width: '75%',
      height: 50,
      marginBottom: 12,
    },
    textInputPassword1: {
      flex: 1,
      fontSize: 10.1,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    textInputPassword2: {
      flex: 1,
      fontSize: 10.1,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    showPasswordButton: {
      paddingHorizontal: 10,
    },
    titletext: {
      fontSize: 30,
      fontFamily: 'Lovelo',
      marginBottom: 5,
      textAlign: 'center',
    },
    infButtons: {
      paddingVertical: '15%',
      alignItems: 'center',
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 25,
    },
    infButtonsText: {
      fontSize: 12,
      textAlign: 'center',
      fontFamily: 'Poppins-SemiBold'
    }
  });
  