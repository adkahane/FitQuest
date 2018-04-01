import React from 'react';
import { StyleSheet, View, Component, Text } from 'react-native';
import EasyQuest from '../../components/EasyQuest';
import MediumQuest from '../../components/MediumQuest';
import HardQuest from '../../components/HardQuest';
import CreateQuest from '../../components/CreateQuest';
import styles from './NewQuestStyles.js';


class NewQuest extends React.Component {


    render() {

        return (


            <View style={styles.container}>
              <EasyQuest />
              <MediumQuest />
              <HardQuest />
              <CreateQuest />
           </View>




        );
    }
}

export default NewQuest;