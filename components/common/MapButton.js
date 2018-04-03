import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; 

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
		backgroundColor: "rgba(49, 111,244, 1)",
		marginLeft: 0.5, 
		marginRight: 0.5, 
	},
	textStyle: {
		color: '#fff', 
		alignSelf: 'center',
		fontSize: 20
	}
}); 

export { MapButton } ; 
