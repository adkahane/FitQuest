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
        return <GoogleLogin />;
      default:
        return <GoogleLogin />;
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