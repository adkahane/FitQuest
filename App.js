import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DrawerNavigator } from 'react-navigation';
import reducers from './reducers'
import MyHeader from './components/MyHeader';
import { NavButtons, DrawerStack} from './components/Navigation';
import GoogleLogin from './components/Login/GoogleLogin';
import { Spinner } from './components/common'

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
      loggedIn: false,
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

   // async componentWillMount() {
   //  firebase.initializeApp({
   //    apiKey: 'AIzaSyDjmm9QC9AaA4wYVtYn9-WsBtW_2QRaCZ4',
   //    authDomain: 'authentication-d36c6.firebaseapp.com',
   //    databaseURL: 'https://authentication-d36c6.firebaseio.com',
   //    projectId: 'authentication-d36c6',
   //    storageBucket: 'authentication-d36c6.appspot.com',
   //    messagingSenderId: '75288336879'
   //  });
   //  firebase.auth().onAuthStateChanged((user) => {
   //    if (user) {
   //      this.setState({ loggedIn: true});
   //    } else {
   //      this.setState({ loggedIn: null });
   //    }
   //  });


  // renderContent() {
  //   switch (this.state.loggedIn) {
  //     case true:
  //       return (
  //           <DrawerStack />
  //       )
  //     case false:
  //       return <LoginForm />;
  //     default:
  //       return <LoginForm />;
  //   }
  // }

  render() { 
    if (this.state.fontLoaded){
      return (
         <Provider store={ createStore(reducers) }>
            <View style={ styles.container }>
              <GoogleLogin />
            </View>
         </Provider>
      );
    }
    else {
      return <Spinner />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
