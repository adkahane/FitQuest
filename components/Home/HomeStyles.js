import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textHome: {
        color: "rgba(49, 111,244, 1)",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 20,
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        justifyContent: "space-around",
        flexDirection: 'column'
    }
});


export default styles;