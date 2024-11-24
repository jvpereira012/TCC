import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00bf63',
        padding: 30,
    },
    containerButton: {
        flex: 1,
        backgroundColor: '#00bf63',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 'auto', 
        width: '101%', 
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Lovelo',
        fontSize: 32.5,
        color: '#fff',
        marginBottom: 10,
        marginTop:20,
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
