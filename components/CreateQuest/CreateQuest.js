import React from 'react';
import { StyleSheet, View, Component, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Map from '../../components/Map';
import Camera from '../../components/Camera/camera.js';
import styles from './CreateQuestStyles.js';


class CreateQuest extends React.Component {
    constructor(){
        super();
        this.state ={
            quest:{
                name:'',
                challenged_id:0,             
                new_quest: true,
                diff_level:0,
                time:'',
                distance:0,
                elevation:0,
                quest_score:0,
                steps:0,
                route:[{
                      latitude:0, 
                      longitude:0,
                      }],
                  waypoints:[{
                          url:'', 
                          lat:0, 
                          lng:0
                          }]
            },
            route: {
                polylines: [],
                speed: [],
                timestamp: [],
            },
            location: {
                latitude:  37.871732795815525,
                longitude:  -122.27066792384305
            },
            started: false 
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