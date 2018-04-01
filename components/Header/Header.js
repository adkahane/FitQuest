import React from 'react';
import { Header, Card } from 'react-native-elements';

class Header extends React.Component {
  render() {
    return (
                
          <Header 
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={{ text: 'FitQuest', style: { color: '#fff',
            fontWeight: 'bold', fontSize: 30, marginTop: '10%', marginBottom: '6%' } }}
            outerContainerStyles={{ backgroundColor: 'rgba(49, 111,244, 1)',
             flexDirection: 'row', borderColor: 'rgba(49, 111,244, 1)',
             width: '100%', height: '15%', justifyContent: 'space-around', alignItems: 'center' }}
            innerContainerStyles={{ justifyContent: 'flex-start' }}/>
        
    );
  }
}

export default Header; 
