import React from 'react';
import { AsyncStorage, Alert, ScrollView, View, Button } from 'react-native';
import { Google } from 'expo';
// import User from '../../server/models/User';
export default class GoogleLogin extends React.Component {
  static navigationOptions = {
    title: 'Google',
  };

  
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => this._testGoogleLogin()} title="Authenticate with Google" />
      </View>
    );
  }
  _testGoogleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        // androidStandaloneAppClientId:
        //   '603386649315-87mbvgc739sec2gjtptl701ha62pi98p.apps.googleusercontent.com',
        androidClientId: '101222014296-vl3io9m5ga8rf8qcii1kas7p2lsjsqb3.apps.googleusercontent.com',
        iosStandaloneAppClientId:
          '603386649315-1b2o2gole94qc6h4prj6lvoiueq83se4.apps.googleusercontent.com',
        iosClientId: '101222014296-c1q5flrh3onjpbhfrmer39t7jn6mhr2t.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      const { type } = result;
      if (type === 'success') {
        // Avoid race condition with the WebView hiding when using web-based sign in
        setTimeout(() => {
          // const currUser = result.user;
          AsyncStorage.setItem('currentUser', result.user);
          Alert.alert('Logged in!', JSON.stringify(result), [
            {
              text: 'OK!',
              onPress: () => {
                console.log(currUser.user.id);
                console.log({ result });
              },
            },
          ]);
        }, 1000);
      }
    } catch (e) {
      Alert.alert('Error!', e.message, [{ text: 'OK :(', onPress: () => {} }]);
    }
  };
}