import React from 'react';
import { ButtonGroup, Button } from 'react-native-elements';
import {View} from 'react-native';
import Home from './../Home';
import Stats from './../Stats';
import NewQuest from './../NewQuest';
import CreateQuest from './../CreateQuest';
import ChallengeQuest from './../ChallengeQuest/ChallengeQuest';


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
  
  _renderNewQuest = () => {
    return(<ChallengeQuest />);
  }
  
  _renderStats = () => {
    return(<Stats />);
  }
  
  _createQuest = () => {
    return(<CreateQuest />);
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render() {
    const buttons = ['Home', 'Create', 'New Quest', 'Stats']
    const { selectedIndex } = this.state

    return (    
      <View>           
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          buttonStyle={{justifyContent: 'center', width: '100%'}}
          containerStyle={{height: '10%', width: '102%',
          backgroundColor: 'rgba(49, 111,244, 1)',
          justifyContent: 'flex-start', marginTop: '0%', marginBottom: '0%', marginLeft: -5}}
          textStyle={{color: 'white', fontWeight: 'bold'}}
        />
        {(() => {
          switch (this.state.selectedIndex) {
            case 0: return (
              <View style={{flex: .9}}>
                {this._renderHome()}
              </View>
            );
            case 1: return (
              <View style={{flex: .9}}>
                {this._createQuest()}
              </View>
            );
            case 2: return (
              <View style={{flex: .9}}>
                {this._renderNewQuest()}
              </View>
            );
            case 3: return (
              <View style={{flex: .9}}>
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

