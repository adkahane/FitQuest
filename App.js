import React, { Component, Wrapper } from 'react';
import { StyleSheet, View, TouchableOpacity, Button, Text, Alert } from 'react-native';
import FitHeader from './components/FitHeader';
import FitButtons from './components/FitButtons';
import Authentication from './components/Authentication';




//type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
}
  render() {

    return (
      <View style={styles.container}>
        <FitHeader />
        <FitButtons />
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