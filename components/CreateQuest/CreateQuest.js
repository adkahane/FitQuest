import React from 'react';
import { StyleSheet, View, Component, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Map from '../../components/Map';
import Camera from '../../components/Camera/camera.js';
import styles from './CreateQuestStyles.js';


class CreateQuest extends React.Component {


    render() {
        return (


            <View style={styles.container}>
              <Map />
              <Camera />
            </View>




        );
    }
}

export default CreateQuest;