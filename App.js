import React, { Component, Wrapper } from 'react';
import { StyleSheet, View, TouchableOpacity, Button, Text, Alert } from 'react-native';
import FitHeader from './components/FitHeader';
import FitButtons from './components/FitButtons';
import FitMap from './components/FitMap';
import Camera from './components/Camera/camera.js';

//type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
}

_renderMyCamera = () => {
  return (<Camera />);
}

_renderMyMap = () => {
  return(<FitMap />)
}
  
  render() {
    return (
      <View style={styles.container}>
        <FitHeader />
        <FitButtons />
        <TouchableOpacity  onPress={()=>{this.setState({visible: true})}} style={styles.button} >
          <Text style={styles.buttonText} >Open Camera</Text>
        </TouchableOpacity>

        {this.state.visible ? this._renderMyCamera() : null}
        {!this.state.visible ? this._renderMyMap() : null}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(134, 249, 5, 1))',
    alignItems: 'center',
    justifyContent: "flex-start"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});