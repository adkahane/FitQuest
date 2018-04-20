import React from 'react';
import { Image } from 'react-native';
import { Header, Card, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import firebase from 'firebase';

class MyHeader extends React.Component {
  render() {
    return (

          <Header 
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={<Image
            style={{ height: 60, width: 60, alignSelf: 'flex-start', marginTop: 20, marginLeft: 20, backgroundColor: '#aa076b'}}
            source={require('../../assets/images/art2.png')}
          />}
          rightComponent={<Button onPress={() => firebase.auth().signOut()}
          title='Log Out'
          titleStyle={{ fontWeight: "700",
            color: 'rgba(49, 111,244, 1)',
          fontSize: 12 }}
          buttonStyle={{
            backgroundColor: "#aa076b",
            width: 70,
            height: 30,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
            containerStyle={{ marginTop: 20 }}
        />}
            centerComponent={{ text: 'FitQuest', style: { color: '#aa076b',
            fontWeight: 'bold', fontSize: 30, marginTop: '10%', marginBottom: '6%' } }}
            outerContainerStyles={{ backgroundColor: 'rgba(49, 111,244, 1)',
             flexDirection: 'row', borderColor: 'rgba(49, 111,244, 1)',
             width: '100%', height: '15%', justifyContent: 'space-around', alignItems: 'center' }}
            innerContainerStyles={{ justifyContent: 'flex-start' }}/>
        
    );
  }
}

export default MyHeader; 
