import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(135, 141, 161, 0.62)',

    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: 'rgba(135, 141, 161, 0.62)'
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold'
    },
    contentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    triangleLeft: {
        position: 'absolute',
        left: -20,
        bottom: 0,
        width: 0,
        height: 0,
        borderRightWidth: 20,
        borderRightColor: 'white',
        borderBottomWidth: 25,
        borderBottomColor: 'transparent',
        borderTopWidth: 25,
        borderTopColor: 'transparent'
    },
    triangleRight: {
        position: 'absolute',
        right: -20,
        top: 0,
        width: 0,
        height: 0,
        borderLeftWidth: 20,
        borderLeftColor: 'white',
        borderBottomWidth: 25,
        borderBottomColor: 'transparent',
        borderTopWidth: 25,
        borderTopColor: 'transparent'
    }
});

export default styles;