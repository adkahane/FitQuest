import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
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
                title: 'Steps',
                value: '2,867'
            },
            {
                title: 'Distance',
                value: '1 mile'
            },
            {
                title: 'Elevation',
                value: '1 mile'
            },
            {
                title: 'Time',
                value: '30 mins'
            },
            {
                title: 'Avg Speed',
                value: '10 mph'
            }

        ]
        return (
            <ScrollView contentContainerStyle={{
                flexDirection: 'row', width: "100%",
                flex:1, backgroundColor: 'white',
                borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'flex-start',
                marginTop: '0%'
            }} scrollEnabled={this.state.enabled}>
                <Avatar
                    xlarge
                    source={{
                        uri: "https://avatars2.githubusercontent.com/u/28679029?s=460&v=4" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{ justifyContent: 'flex-start', alignSelf: 'flex-start', marginTop: '5%', marginBottom: "5%", marginLeft: '5%' }}
                />
                <View style={{justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row', marginTop: 170, marginLeft: -150}}>
                <Text style={styles.textHome}>
                        {`User: adkahane

Level: 3

Steps: 8,547

Distance: 4.23 miles

Time: 1.5 hours`}

                </Text>
                </View>

            </ScrollView>




        );
    }
}

export default Home;