import React, { Component } from 'react';
import { Image, Text, Dimensions, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, View } from 'native-base';
import easyQuest from '../EasyQuest/easy-quest.json';
import { Map } from '../common/CardMap.js';

let { width, height } = Dimensions.get('window');
let latitude = 37.870443;
let longitude = -122.271473;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00380;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class EasyQuest extends Component {
  
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
                  <Map
                    location={{ 
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA}}
                    polylines= { easyQuest } >  
                  </Map>  
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent >
                  <Icon active name="walk" />
                  <Text>&nbsp;Steps: 1,800&nbsp;&nbsp;&nbsp;</Text>
                  <Icon active name="stopwatch" />
                  <Text>&nbsp;Time: 14:00</Text>
                  <Text>&nbsp;Climb: 0 ft</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }  
}

