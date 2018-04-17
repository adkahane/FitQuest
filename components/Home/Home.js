import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card } from 'react-native-elements';
import { CardSection, Input } from '../common';
import styles from './HomeStyles.js';


class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            enabled:true
        };
    }

    render() {
        const list = [
            {
                title: 'User:',
                subtitle: 'adkahane'
            },
            {
                title: 'Level: ',
                subtitle: '3'
            },
            {
                title: 'Steps:',
                subtitle: '8,547'
            },
            {
                title: 'Distance:',
                subtitle: '4.23 miles'
            },
            {
                title: 'Time',
                subtitle: '1.5 hours'
            }

        ]
        return (
            <ScrollView contentContainerStyle={{
                flexDirection: 'column', width: "100%",
                flex: 0, backgroundColor: 'white',
                borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'flex-start',
                marginTop: '0%'
            }} scrollEnabled={this.state.enabled}>
                <Avatar
                    xlarge
                    source={{
                        uri: "https://avatars2.githubusercontent.com/u/28679029?s=460&v=4" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{ flex: 5, justifyContent: 'flex-start', alignSelf: 'flex-start', marginTop: '1%', marginBottom: "3%", marginLeft: '5%' }}
                />
                <View style={{justifyContent: 'flex-start', alignItems: 'stretch', flexDirection: 'column', marginTop: -5, marginLeft: 10}}>
                    
                    
                        {
                        

                            list.map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={l.title}
                                    subtitle={l.subtitle}
                                    titleStyle={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(74, 145, 48, 1)', width: 300}}
                                    subtitleStyle={{ fontSize: 20, fontWeight: 'bold', color: 'rgba(127, 42, 104, 1)', width: 300}}
                                    hideChevron={true}
                                
                                />
                            ))
                        }
                    </View>
            </ScrollView>




        );
    }
}

export default Home;