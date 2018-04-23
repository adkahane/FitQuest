import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Image, Platform } from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { Icon, Container, Header, Content, Left, Title, Body, Right, Card, CardItem, Thumbnail } from 'native-base';
import { CardSection, Input } from '../common';
import styles from './HomeStyles.js';
import { NavButtons, DrawerStack} from '../Navigation';
import { DrawerNavigator } from 'react-navigation';
import { Spinner } from '../common';
import { Font } from 'expo';


class Home extends React.Component {

    static navigationOptions = {
        drawerIcon: (
            <Image source={ require('../../assets/icons/home.png') }
                   style={{ height: 24, width: 24 }} />
        )
    }

    constructor() {
        super();
        this.state = {
            enabled:true,
            fontLoaded:false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ fontLoaded: true });
      }

    render() {
        const list = [
            {
                title: 'User:',
                subtitle: 'adkahane'
            },
            {
                title: 'Level: ',
                subtitle: '3'
            },
            {
                title: 'Steps:',
                subtitle: '8,547'
            },
            {
                title: 'Distance:',
                subtitle: '4.23 miles'
            },
            {
                title: 'Time',
                subtitle: '1.5 hours'
            }

        ]
        if (this.state.fontLoaded){
        return (
          <Container>
            <Header style={{ paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: '#aa076b'}}>
              <Left>
                <Icon name="ios-menu" style={{ color: '#fff' }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </Left>
              <Body>
                <Title style={{ color: '#fff' }}>FitQuest</Title>
              </Body>
              <Right />
            </Header>
            <Content style={{ height: '100%' }}>
              {/* <ScrollView contentContainerStyle={{
                  flexDirection: 'column', width: "100%",
                  flex: 1, backgroundColor: 'white',
                  borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'flex-start',
                  marginTop: '0%'
              }} scrollEnabled={this.state.enabled}>
                  <Avatar
                      xlarge
                      source={{
                          uri: "https://avatars2.githubusercontent.com/u/28679029?s=460&v=4" }}
                      onPress={() => console.log("Works!")}
                      activeOpacity={0.7}
                      containerStyle={{ justifyContent: 'flex-start', alignSelf: 'flex-start', marginTop: '1%', marginBottom: "5%", marginLeft: '5%' }}
                  />
                  <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', marginTop: -15, marginLeft: 0}}>
                          {
                              list.map((l, i) => (
                                  <ListItem
                                      style={{width: 300}}
                                      key={i}
                                      title={l.title}
                                      subtitle={l.subtitle}
                                      titleStyle={{ fontSize: 22, fontWeight: 'bold', color: '#aa076b', width: 300}}
                                      subtitleStyle={{ fontSize: 22, fontWeight: 'bold', color: '#52c234', width: 300}}
                                  hideChevron={true}
                                  bottomDivider={false}
                                  />
                              ))
                          }
                  </View>
              </ScrollView> */}
              <ScrollView scrollEnabled>
                <Card style={{ width:'92%', alignSelf: 'center', borderColor: '#52c234', borderWidth: 1, alignItems: 'center',
                               marginTop: '4%', paddingBottom:' 78%' }}>
                  <CardItem style={{ borderColor: '#aa076b', borderWidth: 1, marginTop: '7%', marginBottom:'3%' }}>
                    <Avatar
                        xlarge
                        source={{
                            uri: "https://avatars2.githubusercontent.com/u/28679029?s=460&v=4" }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                  </CardItem>
                  <CardItem >
                    <Body style={{ marginLeft: '20%'}}>
                      <Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                          User:&nbsp;&nbsp;
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                          adkahane
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                          Level:&nbsp;&nbsp;
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                          3
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                           Steps:&nbsp;&nbsp;
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                          8,547
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                           Distance:&nbsp;&nbsp;
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                          4.23 miles
                        </Text>
                      </Text>

                      <Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                           Time:&nbsp;&nbsp;
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                          1.5 hours
                        </Text>
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </ScrollView>
            </Content>
          </Container>
        );
    }
    else {
        return <Spinner />;
    }
    }
}

export default Home;
