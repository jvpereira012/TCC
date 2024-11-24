import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00bf63',
        padding: 30,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingHorizontal: 1, 
        marginTop: 'auto', 
        width: '106%', 
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Lovelo',
        fontSize: 32.5,
        color: '#fff',
        marginTop: 20,
        marginBottom: 10,
        margin: 3,
    },
    subtitle: {
        textAlign: 'center',
        fontFamily:'Poppins-SemiBold',
        fontSize: 24.1,
        color: '#fff',
        margin: 4,
    },
    button: {
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonView: {
        alignItems: 'center',
    },
    buttonText: {
        fontFamily:'Poppins-Bold',
        fontSize: 14.4,
        color: '#fff',
        marginTop: 5,
    }
});
