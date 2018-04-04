import React, { Component, Wrapper } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import firebase from 'firebase';
import MyHeader from './components/MyHeader';
import NavButtons from './components/Navigation';
import NewQuest from './components/NewQuest';
import CreateQuest from './components/CreateQuest';
import { Button, Card, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


type Props = {};
export default class App extends Component<Props> {
  

  constructor(props){
    super(props);
    this.state = {
      visible: false,
      loggedIn: false
    }
}



  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjmm9QC9AaA4wYVtYn9-WsBtW_2QRaCZ4',
      authDomain: 'authentication-d36c6.firebaseapp.com',
      databaseURL: 'https://authentication-d36c6.firebaseio.com',
      projectId: 'authentication-d36c6',
      storageBucket: 'authentication-d36c6.appspot.com',
      messagingSenderId: '75288336879'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: null });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <View>
        <MyHeader />
        <NavButtons />
        </View>
        )
      case false:
        return <LoginForm />;
      default:
        return <LoginForm />;
    }
    
  }
  

  render() {

    return (
      <View style={styles.container}>
        
        {this.renderContent()}
        
       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "flex-start"
  },
  button: {
    marginTop: '2%',
    width: '75%',
    height: '8%',
    alignItems: 'center',
    backgroundColor: 'rgba(49, 111,244, 1)'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19
  }
});