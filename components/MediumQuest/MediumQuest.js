import React from 'react';
import { Image, Text, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import medQuest from '../MediumQuest/medium-quest.json';
import { Map } from '../common/CardMap.js';

let { width, height } = Dimensions.get('window');
let latitude = 37.824634; 
let longitude = -122.181855;
const ASPECT_RATIO = width / height;
let LATITUDE_DELTA = 0.00790;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MediumQuest extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{width: 450, height: 300}}>
            <CardItem>
                <Body>
                  <Text>Medium Quest</Text>
                </Body>
            </CardItem> 
            <CardItem cardBody>
              <Map
                location={{ 
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA}}
                polylines= { medQuest } />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="walk" />
                  <Text>&nbsp;3,600 Steps &nbsp;&nbsp;&nbsp;&nbsp;</Text>
                  <Icon active name="stopwatch" />
                  <Text>&nbsp;Average Time: 43:00</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}