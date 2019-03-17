import React from 'react';
import { Image, Text, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import hardQuest from '../HardQuest/hard-quest.json';
import { Map } from '../common/CardMap.js';

let { width, height } = Dimensions.get('window');
let latitude = 	37.868243; 
let longitude = -121.926388;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02780;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HardQuest extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{width: 450, height: 300}}>
            <CardItem>
                <Body>
                  <Text>Hard Quest</Text>
                </Body>
            </CardItem> 
            <CardItem cardBody>
              <Map
                location={{ 
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA}}
                polylines= { hardQuest } /> 
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="walk" />
                  <Text>&nbsp;Steps: 9,000&nbsp;&nbsp;&nbsp;</Text>
                  <Icon active name="stopwatch" />
                  <Text>&nbsp;Time: 105:00</Text>
                  <Text>&nbsp;Climb: 2,644 ft</Text>
                  </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}