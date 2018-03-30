import React from 'react';
import { Card } from 'react-native-elements';

class FitFooter extends React.Component {
    render() {
        return (
            <Card containerStyle={{
                flexDirection: 'row', width: "100%",
                height: '10%', backgroundColor: 'rgba(49, 111,244, 1)',
                borderColor: 'rgba(49, 111,244, 1)', justifyContent: 'space-around',
                alignItems: 'stretch', marginTop: '0%'
            }}>
            </Card>

        );
    }
}

export default FitFooter; 
