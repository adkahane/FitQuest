import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
import styles from './MediumQuestStyles.js';


class MediumQuest extends React.Component {


    render() {

        return (


            <Card containerStyle={{flexDirection: 'row', width: "100%",
                height: 155, backgroundColor: 'rgba(44, 244, 250, 1)',
                borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'center', alignItems: 'center',
                alignSelf: 'center', marginTop: '-1.5%', marginBottom: '-1%'
                }}> 
                <Icon
                  name='fitness-center'
                  color='rgba(49, 111,244, 1)'
                  size={30}
                  />
                <Text style={styles.text}>{`Medium`}</Text>

            </Card>



        );
    }
}

export default MediumQuest;