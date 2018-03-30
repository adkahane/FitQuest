import React from 'react';
import { Header, Card } from 'react-native-elements';

class FitHeader extends React.Component {
  render() {
    return (
       <Card containerStyle={{flexDirection: 'row', width: "100%",
        height: '10%', backgroundColor: 'rgba(49, 111,244, 1)',
        borderColor: 'rgba(49, 111,244, 1)', justifyContent: 'space-around',
        alignItems: 'stretch', marginTop: '0%'
        }}> 
                
          <Header 
            statusBarProps={{ barStyle: 'light-content' }}
            centerComponent={{ text: 'FitQuest', style: { color: '#fff',
            fontWeight: 'bold', fontSize: 30, marginTop: '-3%', marginBottom: '6%' } }}
            outerContainerStyles={{ backgroundColor: 'rgba(49, 111,244, 1)',
             flexDirection: 'row', borderColor: 'rgba(49, 111,244, 1)',
             width: '100%', justifyContent: 'space-around', alignItems: 'center' }}
            innerContainerStyles={{ justifyContent: 'flex-start' }}/>
        
        </Card>
    );
  }
}

export default FitHeader; 
