import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf8',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  header: {
    height: 100, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10,
  },
  headerText: {
    fontSize: 26,
    fontSize: 26,
    fontFamily: 'Lovelo',
    color: '#00bf63',
  },
  options: {
    flex: 1,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingVertical: 13,
    paddingHorizontal: 10,
    backgroundColor: '#f8f5fc',
    borderRadius: 10,
    marginBottom: 10,
    marginBottom: 10,
  },
  optionIcon: {
    marginRight: 4,
    marginRight: 4,
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  optionTextBold: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Lovelo',
    color: '#c4c4c4',
  },
  optionTitle: {
    marginTop:15,
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center', // Centraliza verticalmente
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Lovelo',
    color: '#c4c4c4',
  },
  optionTitle: {
    marginTop:15,
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center', // Centraliza verticalmente
  },
});