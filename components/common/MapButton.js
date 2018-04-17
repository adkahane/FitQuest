import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const MapButton = ({ onPress, buttonText}) => {
	return(
		<TouchableOpacity 
			onPress={ onPress }
			style={ styles.buttonStyle }
		>
			<Text style={ styles.textStyle }>{buttonText}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        height: '22%',
        backgroundColor: "rgba(127, 42, 104, 1)",
        marginLeft: 0.5, 
        marginRight: 0.5, 
        justifyContent: 'center'
    },
    textStyle: {
        color: '#fff', 
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export { MapButton } ; 


