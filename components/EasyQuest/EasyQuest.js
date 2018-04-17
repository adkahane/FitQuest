import React from 'react';
import { Image, Text } from 'react-native';
// import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
// import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
// import styles from './EasyQuestStyles.js';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

export default class EasyQuest extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{width: 450, height: 300}}>
            <CardItem>
                <Body>
                  <Text>Easy Quest</Text>
                </Body>
            </CardItem> 
            <CardItem cardBody>
              <Image source={{uri: 'https://camo.githubusercontent.com/689a96e5a1b1522bf9da9001ac66b00dad621ac5/687474703a2f2f656d63636f6e76696c6c652e636f6d2f506f6c796c696e652f647573747967726f6f76652e706e67'}} style={{height: 200, width: 100, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="walk" />
                  <Text>12,000 Steps</Text>
                </Button>
              </Left>
           {/*   <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
           </Right> */}
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


// class EasyQuest extends React.Component {


//     render() {

//         return (


         
//             <Card image={require('./easy-quest.png')} containerStyle={{flexDirection: 'row', width: "100%",
//                 height: 155, backgroundColor: 'rgba(88, 95, 99, 0.16)',
//                 borderColor: 'rgba(88, 95, 99, 0.16)', justifyContent: 'center', alignItems: 'center',
//                 alignSelf: 'center', marginTop: '5%', marginBottom: '0%', borderRadius: '5'
//                 }}>
//                 <Map polylines={[
//                     { latitude: 37.8025259, longitude: -122.4351431 },
//                     { latitude: 37.7896386, longitude: -122.421646 },
//                     { latitude: 37.7665248, longitude: -122.4161628 },
//                     { latitude: 37.7734153, longitude: -122.4577787 },
//                     { latitude: 37.7948605, longitude: -122.4596065 },
//                     { latitude: 37.8025259, longitude: -122.4351431 }
//                 ]} /> 
//                 <Icon
//                   name='directions-walk'
//                   color='rgba(49, 111,244, 1)'
//                   size={30}
//                   />
//                 <Text style={styles.text}>{`Easy`}</Text>

//               </Card>
          



//         );
//     }
// }

// export default EasyQuest;