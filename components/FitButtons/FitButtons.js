import React from 'react';
import { ButtonGroup, Button } from 'react-native-elements';

class FitButtons extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render() {
    const buttons = ['Home', 'Past Quest', 'Next Quest', 'Stats']
    const { selectedIndex } = this.state

    return (                
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
    );
  }
}

export default FitButtons;

