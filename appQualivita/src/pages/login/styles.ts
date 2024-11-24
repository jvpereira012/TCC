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
    },
    containerHeader: {
      alignItems: 'center',
      marginVertical: 20,
    },
    imgContainer: {
      marginTop: "-30%",
      resizeMode: 'contain',
      width: 220,
      height: 270,
    },
    titletext: {
      marginTop: "-10%",
      fontSize: 45,
      fontFamily: 'Lovelo',
      textAlign: 'center', 
    },
    subtitle: {
      fontFamily: 'Poppins',
      textAlign: 'center',
      fontSize: 14,
    },
    formView: {
      width: '80%',
    },
    textLabel: {
      fontFamily: 'Poppins-Bold',
      fontSize: 13,
      marginBottom: 5,
    },
    textInput: {
      fontSize: 12,
      borderRadius: 15,
      backgroundColor: '#fff',
      height: 50,
      paddingHorizontal: 10,
      marginBottom: 12,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 15,
      height: 50,
      marginBottom: 12,
    },
    textInputPassword: {
      flex: 1,
      fontSize: 12,
      paddingHorizontal: 10,
    },
    showPasswordButton: {
      paddingHorizontal: 10,
    },
    buttonInput: {
      borderRadius: 8,
      marginTop: 10,
      backgroundColor: '#00Bf63',
      paddingVertical: 10,
      alignItems: 'center',
    },
    infButtons: {
      alignItems: 'center',
      marginVertical: 20,
    },
    infButtonsText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 12,
      textAlign: 'center',
    },
  });
  