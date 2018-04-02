import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
import styles from './HardQuestStyles.js';


class HardQuest extends React.Component {


    render() {

        return (

          
            <Card containerStyle={{flexDirection: 'row', width: "100%",
                height: 150, backgroundColor: 'rgba(44, 244, 250, 1)',
                borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'space-around',
                alignItems: 'center', marginTop: '5%'
                }}> 
                <Icon
                  name='landscape'
                  color='rgba(49, 111,244, 1)'
                  />
                <Text style={styles.text}>{`Difficult`}</Text>

            </Card>



        );
    }
}

export default HardQuest;