import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
import styles from './FitHomeStyles.js';


class FitHome extends React.Component {

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
            <Card containerStyle={{
                flexDirection: 'row', width: "100%",
                height: '81%', backgroundColor: 'rgba(44, 244, 250, 1)',
                borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'flex-start',
                marginTop: '0%'
            }}>
                <Avatar
                    xlarge
                    source={{ uri: "http://mrwgifs.com/wp-content/uploads/2013/08/Spongebob-Eagerly-Awaits-The-Start-Of-Boating-School_408x408.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: "20%" }}
                />
                <Text style={styles.textHome}>
                    {`Steps:

Distance:

Elevation:

Time:`}

                </Text>


            </Card>




        );
    }
}

export default FitHome;