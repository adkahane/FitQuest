import React from 'react';
import { StyleSheet, View, Component, Text } from 'react-native';
import Map from '../../components/Map';
import Camera from '../../components/Camera/camera.js';
import { Button } from '../common'
import Footer from '../Footer'

class CreateQuest extends React.Component {
    render() {
        return (  
            <View style={styles.container}>
            	<Map />
            	<View style={{flex: 1, flexDirection: 'row'}}>
		    		<Button 
		          		buttonText="Start" 
		          	/>
		          	<Button 
		          		buttonText="Stop" 
		          	/>
		          	<Button 
		          		buttonText="Abort" 
		          	/>
		          	<Button 
		          		buttonText="Open Camera" 
		          	/>
		        </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    	flex: 1,
        backgroundColor: 'white',
    }
});

export default CreateQuest;