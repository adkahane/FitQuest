import React from 'react';
import { ButtonGroup, Button } from 'react-native-elements';
import {View} from 'react-native';
// import FitHeader from './../../FitHeader';
// import FitButtons from './../FitButtons';
import FitMap from './../FitMap';
import Camera from './../Camera/camera.js';
import FitHome from './../FitHome';
import FitFooter from './../FitFooter';
import FitStats from './../FitStats';

class FitButtons extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this);
  }

  _renderHome = () => {
    return(<FitHome />);
  }
  
  // _renderHistory = () => {
  //   return(<FitHistory />);
  // }
  
  // _renderNewQuest = () => {
    // return(<NewQuest />);
  // }
  
  _renderStats = () => {
    return(<FitStats />);
  }
  
  _renderMyCamera = () => {
    return (<Camera />);
  }
  
  _renderMyMap = () => {
    return(<FitMap />);
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render() {
    const buttons = ['Home', 'Past Quest', 'Next Quest', 'Stats']
    const { selectedIndex } = this.state

    // console.log(selectedIndex);


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
                {this._renderMyCamera()}
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

export default FitButtons;

