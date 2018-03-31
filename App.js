import React, { Component, Wrapper } from 'react';
import { StyleSheet, View, TouchableOpacity, Button, Text, Alert } from 'react-native';
import FitHeader from './components/FitHeader';
import FitButtons from './components/FitButtons';
import FitMap from './components/FitMap';
import Camera from './components/Camera/camera.js';
import FitHome from './components/FitHome';
import FitFooter from './components/FitFooter';
import FitStats from './components/FitStats';
import FitNew from './components/FitNew';
import CreateCard from './components/CreateCard';
import Authentication from './components/Authentication';




type Props = {};
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
<<<<<<< HEAD

        {this.state.visible ? this._renderMyCamera() : null}
        {!this.state.visible ? this._renderMyMap() : null}
        <TouchableOpacity  onPress={()=>{this.setState({visible: true})}} style={styles.button} >
          <Text style={styles.buttonText} >Open Camera</Text>
        </TouchableOpacity>

=======
        {this.state.visible ? this._renderMyCamera() : this._renderMyMap() }
        {(() => {
          switch (this.state.visible) {
            case true:   return (
              <TouchableOpacity  onPress={()=>{this.setState({visible: false})}} style={styles.button} >
                <Text style={styles.buttonText} >Open Camera</Text>
              </TouchableOpacity>
            );
            case false: return (
              <TouchableOpacity  onPress={()=>{this.setState({visible: true})}} style={styles.button} >
                <Text style={styles.buttonText} >Open Camera</Text>
              </TouchableOpacity>
            );
          }
        })()}
>>>>>>> cda409d45e4273277d00c7f24d3d2a35d3d88a5c
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