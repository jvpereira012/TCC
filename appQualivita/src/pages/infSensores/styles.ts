import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffdf8',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      fontSize: 22,
      fontFamily: 'Lovelo',
      color: '#00bf63',
    },
    scrollView: {
      flex: 1,
      marginBottom: 20,
    },
    contentText: {
      fontSize: 16,
      fontFamily: 'Arial',
      color: '#666',
      lineHeight: 24,
      textAlign: 'justify',
      marginBottom: 15,
    },
    listItem: {
      fontSize: 16,
      fontFamily: 'Arial',
      color: '#666',
      lineHeight: 24,
      marginBottom: 10,
      paddingLeft: 10,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00bf63',
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 15,
    },
    backButtonText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Lovelo',
      marginLeft: 8,
    },
  });
  