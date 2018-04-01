import React from 'react';
import { ButtonGroup, Button } from 'react-native-elements';
import {View} from 'react-native';
import Map from './../Map';
import Camera from './../Camera/camera.js';
import Home from './../Home';
import Footer from './../Footer';
import Stats from './../Stats';
import NewQuest from './components/NewQuest';


class NavButtons extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this);
  }

  _renderHome = () => {
    return(<Home />);
  }
  
  // _renderHistory = () => {
  //   return(<FitHistory />);
  // }
  
  _renderNewQuest = () => {
    return(<NewQuest />);
  }
  
  _renderStats = () => {
    return(<Stats />);
  }
  
  _renderMyCamera = () => {
    return (<Camera />);
  }
  
  _renderMyMap = () => {
    return(<Map />);
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render() {
    const buttons = ['Home', 'History', 'New Quest', 'Stats']
    const { selectedIndex } = this.state

    return (    
      <View>           
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          buttonStyle={{justifyContent: 'center', width: '100%'}}
          containerStyle={{height: '10%', width: '100%',
          backgroundColor: 'rgba(49, 111,244, 1)',
          justifyContent: 'flex-start', marginTop: '0%', marginBottom: '0%'}}
          textStyle={{color: 'white', fontWeight: 'bold'}}
        />
        {(() => {
          switch (this.state.selectedIndex) {
            case 0: return (
              <View>
                {this._renderHome()}
              </View>
            );
            case 1: return (
              <View>
                {this._renderMyMap()}
              </View>
            );
            case 2: return (
              <View>
                {this._renderNewQuest()}
              </View>
            );
            case 3: return (
              <View>
                {this._renderStats()}
              </View>
            );
          }
        })()}
        </View>
    );
  }
}

export default NavButtons;

