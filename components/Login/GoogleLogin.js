// Import components
import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Expo from 'expo';
const config = require('../../config.js');
// import { StackNavigator } from 'react-navigation';

// create a component
export default class GoogleLogin extends Component {
  static navigationOptions = {
    header: null
  }

  // Function to use Google OAuth
  async signInWithGoogleAsync() {
    try {
      // Object that uses the client IDs created for each platform
      const result = await Expo.Google.logInAsync({
        behavior: 'web',
        androidClientId:  config.androidClient.key,
        iosClientId: config.iosClient.key,
        scopes: ['profile', 'email'],
      });


      if (result.type === 'success') {
        AsyncStorage.setItem('auth_id', result.user.id);
        AsyncStorage.setItem('email', result.user.email);
        AsyncStorage.setItem('name', result.user.givenName);
        AsyncStorage.setItem('avatar_url', result.user.photoUrl);
       
        console.log(result);
        // DEVELOPMENT ONLY: NAVIGATE DIRECTLY TO HOME PAGE
        this.props.navigation.navigate('Home');
      }
      return { cancelled: true }
    } catch (e) {
      console.log(e);
      return { error: e }
    }
  } 

  // Render the background image and login button at start
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/splashScreen.png')}
        style={styles.backgroundImage}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.emptyContainer} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this.signInWithGoogleAsync.bind(this)}
              style={styles.button}
            >
              <Text style={styles.text}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

// Creates the StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  backgroundImage: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10,
    borderRadius: 50, borderWidth: 2, borderColor: 'white'
  },
  buttonContainer: {
    flex: 1
  },
  emptyContainer: {
    flex: 3
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
  }
});
