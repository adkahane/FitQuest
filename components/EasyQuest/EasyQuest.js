import React from 'react';
import { Image, Text } from 'react-native';
import { MapView } from 'expo';
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
                  <Text>&nbsp;12,000 Steps &nbsp;&nbsp;&nbsp;&nbsp;</Text>
                  <Icon active name="stopwatch" />
                  <Text>&nbsp;Average Time: 60:00</Text>
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