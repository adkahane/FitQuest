import React from 'react';
import { Image } from 'react-native';
import { Header, Card, Button } from 'react-native-elements';
import firebase from 'firebase';

class MyHeader extends React.Component {
  render() {
    return (

          <Header 
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={<Image
            style={{height:60, width:60, alignSelf: 'flex-start', marginTop: 20, marginLeft: 20}}
            source={require('../../assets/images/art2.png')}
          />}
          rightComponent={<Button onPress={() => firebase.auth().signOut()}
          title='Log Out'
          titleStyle={{ fontWeight: "700",
            color: 'rgba(74, 145, 48, 1)',
          fontSize: 12 }}
          buttonStyle={{
            backgroundColor: "white",
            width: 70,
            height: 30,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />}
            centerComponent={{ text: 'FitQuest', style: { color: '#fff',
            fontWeight: 'bold', fontSize: 30, marginTop: '10%', marginBottom: '6%' } }}
        outerContainerStyles={{
          backgroundColor: 'rgba(74, 145, 48, 1)',
             flexDirection: 'row', borderColor: 'rgba(49, 111,244, 1)',
             width: '100%', height: '15%', justifyContent: 'space-around', alignItems: 'center' }}
            innerContainerStyles={{ justifyContent: 'flex-start' }}/>
        
    );
  }
}

export default MyHeader; 
