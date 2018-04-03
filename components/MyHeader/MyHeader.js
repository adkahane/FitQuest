import React from 'react';
import { Header, Card, Button } from 'react-native-elements';
import firebase from 'firebase';

class MyHeader extends React.Component {
  render() {
    return (
                
          <Header 
          statusBarProps={{ barStyle: 'light-content' }}
          rightComponent={<Button onPress={() => firebase.auth().signOut()}
          title='Log Out'
          titleStyle={{ fontWeight: "700",
            color: 'rgba(49, 111,244, 1)',
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
            outerContainerStyles={{ backgroundColor: 'rgba(49, 111,244, 1)',
             flexDirection: 'row', borderColor: 'rgba(49, 111,244, 1)',
             width: '100%', height: '15%', justifyContent: 'space-around', alignItems: 'center' }}
            innerContainerStyles={{ justifyContent: 'flex-start' }}/>
        
    );
  }
}

export default MyHeader; 
