import React from 'react';
import { StyleSheet, View, Component, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Map from '../../components/Map';
import Camera from '../../components/Camera/camera.js';
import styles from './CreateQuestStyles.js';
import Quest from '../../server/models/Quest';
let quest;

class CreateQuest extends React.Component {

    quest = new Quest();
    constructor(props){
        super(props)
        this.state = {
            quest: quest
        }
    }

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