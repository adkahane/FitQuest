import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';

class MapFooter extends React.Component {
    render() {
        return (
            <Card 
                containerStyle={{
                    flexDirection: 'row', width: "100%",
                    height: '10%', backgroundColor: 'rgba(49, 111,244, 1)',
                    borderColor: 'rgba(49, 111,244, 1)', justifyContent: 'space-around',
                    alignItems: 'stretch', marginTop: '0%'
                }}
            >
                <Button
                    title="Learn More"
                    color="#000"
                    containerStyle={ styles.button }
                />
            </Card>

        );
    }
}

const styles=StyleSheet.create({
    button: {
     width: '100%',
     backgroundColor: 'rgba(98, 17, 136, 1)'
    }
}); 

export default MapFooter; 
