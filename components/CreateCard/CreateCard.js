import React from 'react';
import { StyleSheet, View, Component, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import FitMap from '../../components/FitMap';
import Camera from '../../components/Camera/camera.js';
import styles from './CreateCardStyles.js';


class CreateCard extends React.Component {


    render() {
        return (


            <View style={styles.container}>
              <FitMap />
              <Camera />
            </View>




        );
    }
}

export default CreateCard;