import React from 'react';
import { StyleSheet, View, ScrollView, Component, Text, Image, Platform } from 'react-native';
import { Icon, Container, Header, Content, Left, Title, Body, Right } from 'native-base'; 
import EasyQuest from '../../components/EasyQuest';
import MediumQuest from '../../components/MediumQuest';
import HardQuest from '../../components/HardQuest';
import CreateQuest from '../../components/CreateQuest';
import styles from './NewQuestStyles.js';


class NewQuest extends React.Component {

    static navigationOptions = {
		drawerIcon: (
			<Image source={ require('../../assets/icons/newQuest.png') }
				   style={{ height: 24, width: 24 }} />
		)
    }
    
    constructor() {
		super();
		this.state = {
			enabled:true
		};
	}
  
    render() {
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
    	    <ScrollView contentContainerStyle={{alignItems: 'center'}} scrollEnabled={this.state.enabled}>
                <View style={{height:330, width: '90%', backgroundColor:'white'}}>
                   <EasyQuest />
                </View>
                <View style={{ height: 330, width: '90%', backgroundColor:'white'}}>
                    <MediumQuest />
                </View>
                <View style={{ height: 330, width: '90%', backgroundColor:'white'}}>
                    <HardQuest />
                </View>
                
            </ScrollView>
            </Container> 
        );
    }
}

export default NewQuest;