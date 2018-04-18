import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
import styles from './EasyQuestStyles.js';


class EasyQuest extends React.Component {


    render() {

        return (


         
            <Card image={require('./easy-quest.png')} containerStyle={{flexDirection: 'row', width: "100%",
                height: 155, backgroundColor: 'rgba(88, 95, 99, 0.16)',
                borderColor: 'rgba(88, 95, 99, 0.16)', justifyContent: 'center', alignItems: 'center',
                alignSelf: 'center', marginTop: '5%', marginBottom: '0%', borderRadius: '5'
                }}> 
                <Icon
                  name='directions-walk'
                  color='rgba(49, 111,244, 1)'
                  size={30}
                  />
                <Text style={styles.text}>{`Easy`}</Text>

              </Card>
          



        );
    }
}

export default EasyQuest;