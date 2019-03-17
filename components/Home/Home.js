import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers';
import { AsyncStorage, StyleSheet,  View, TouchableHighlight, ScrollView, Image, Platform } from 'react-native';
import { Avatar, List, ListItem } from 'react-native-elements';
import { Icon, Container, Header, Text, Content, Left, Title, Body, Right, Card, CardItem, Thumbnail } from 'native-base';
import { CardSection, Input } from '../common';
import styles from './HomeStyles.js';
import { NavButtons, DrawerStack} from '../Navigation';
import { DrawerNavigator } from 'react-navigation';
import { Spinner } from '../common';
import { Font } from 'expo';
import ProgressBarClassic from 'react-native-progress-bar-classic';

class Home extends React.Component {

    static navigationOptions = {
      drawerLabel: () => (
        <Text
          style={{ color: '#aa076b', fontWeight: 'bold', fontSize: 20, lineHeight: 50  }}
        >Home</Text>
      ),
      drawerIcon: (
          <Image source={ require('../../assets/icons/home.png') }
                 style={{ height: 24, width: 24 }} />
      )
    }

    constructor() {
        super();
        this.state = {
            enabled:true,
            fontLoaded:false,
            user:{
                auth_id: '',
                name:'',
                email:'',
                avatar_url:'../../assets/images/placeholder.png',
                points:9333,
                steps:'8,547',
                distance:'4.23 miles',
                time:'1.5 hours'
              }
        };
    }

    getUser = () => {
        AsyncStorage.getItem('auth_id').then(auth_id => {
            this.setState({ user: { ...this.state.user, auth_id: auth_id } });
        });
        AsyncStorage.getItem('name').then(name => {
            this.setState({ user: { ...this.state.user, name: name } });
        });
        AsyncStorage.getItem('email').then(email => {
            this.setState({ user: { ...this.state.user, email: email } });
        });
        AsyncStorage.getItem('avatar_url').then(avatar_url => {
            this.setState({ user: { ...this.state.user, avatar_url: avatar_url } });
        });
    }

    async componentWillMount() {
    //   this.getUser();
    }

    async componentDidMount() {
      this.getUser();
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({ fontLoaded: true });
    }

    render() {
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
                <ScrollView scrollEnabled>                
                  <Card transparent style={{ width:'92%', alignSelf: 'center', borderColor: '#FFFFFF', borderWidth: 0, alignItems: 'center',
                                 marginTop: '4%' }}>
                    <CardItem style={{ borderColor: '#FFFFFF', borderWidth: 0, marginTop: '7%', marginBottom:'3%' }}>
                      <Avatar
                          xlarge
                          source={{
                              uri: this.state.user.avatar_url }}
                          onPress={() => console.log("Works!")}
                          activeOpacity={0.7}
                      />
                    </CardItem>
                    <CardItem >
                      <Body style={{ marginLeft: '20%'}}>
                        <Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                            User:&nbsp;&nbsp;
                          </Text>
                          <Text  style={{ fontSize: 25, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                           { this.state.user.name }
                          </Text>
                        </Text>

                        <Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                            Level:&nbsp;&nbsp;
                          </Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                            3
                          </Text>
                        </Text>
                        
                        <Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                             Steps:&nbsp;&nbsp;
                          </Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                           { this.state.user.steps }
                          </Text>
                        </Text>

                        <Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                             Distance:&nbsp;&nbsp;
                          </Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                            { this.state.user.distance }
                          </Text>
                        </Text>

                        <Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#aa076b', width: 300}}>
                             Time:&nbsp;&nbsp;
                          </Text>
                          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#52c234', width: 300 }}>
                            { this.state.user.time }
                          </Text>
                        </Text>
                      <View style={{
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: '1%',

                      }}>
                        <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#aa076b', width: 300 }}>
                          Badges:
                          </Text>
                        <Icon type="FontAwesome" active={true} name="compass" style={{ color: "#16a085", fontSize: 54, marginTop: '7%', marginRight: '4%' }} />
                        <Icon type="FontAwesome" active={true} name="bolt" style={{ color: "#16a085", fontSize: 54, marginTop: '7%', marginRight: '4%' }} />
                        <Icon type="FontAwesome" active={true} name="shield" style={{ color: "#16a085", fontSize: 54, marginTop: '7%', marginRight: '4%' }} />
                      </View>
                      <View style={{
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: '1%',

                      }}>
                        <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#aa076b', width: 300 }}>
                          Progress:
                          </Text>
                        <Icon type="FontAwesome" active={true} name="minus" style={{ color: "#16a085", fontSize: 54, marginTop: '5%', marginRight: '2%' }} />
                        <Icon type="FontAwesome" active={true} name="minus" style={{ color: "#16a085", fontSize: 54, marginTop: '5%', marginRight: '2%' }} />
                        <Icon type="FontAwesome" active={true} name="minus" style={{ color: "#16a085", fontSize: 54, marginTop: '5%', marginRight: '2%' }} />
                        <Icon type="FontAwesome" active={true} name="minus" style={{ color: "#16a085", fontSize: 54, marginTop: '5%', marginRight: '2%' }} />
                      </View>
                      </Body>
                    </CardItem>
                  </Card>
                  <View style={{width: '92%', alignSelf: 'center' }}>
                  <ProgressBarClassic
                    progress={70}
                    valueStyle={'default'}
                    label={'Level'}
                    value={'3'}
                  />
                  </View>
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
