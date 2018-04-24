import React from 'react';
import { StyleSheet, View, ScrollView, Button, Component, Text, Image, Platform } from 'react-native';
import { Icon, Container, Header, Content, Left, Title, Body, Right } from 'native-base';
import EasyQuest from '../../components/EasyQuest';
import MediumQuest from '../../components/MediumQuest';
import HardQuest from '../../components/HardQuest';
import CreateQuest from '../../components/CreateQuest';
import styles from './NewQuestStyles.js';


class NewQuest extends React.Component {

    static navigationOptions = {
        drawerLabel: () => (
            <Text
                style={{ color: '#aa076b', fontWeight: 'bold', fontSize: 20, lineHeight: 50   }}
            >New Quest</Text>
        ),
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
    
    // Navigate to the challenge easy-quest page
    async _navigateEasy() {
        console.log("easy");
        this.props.navigation.navigate('Challenge');
    }

    // Navigate to the challenge medium-quest page
    async _navigateMedium() {
        console.log("medium");
        this.props.navigation.navigate('Challenge');
    }

    // Navigate to the challenge hard-quest page
    async _navigateHard() {
        console.log("hard");
        this.props.navigation.navigate('Challenge');
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
                    <Button
                        onPress={ () => this._navigateEasy() }
                        title="Challenge Easy"
                        color="#841584"
                        />
                </View>
                <View style={{ height: 330, width: '70%', backgroundColor:'white'}}>
                    <MediumQuest />
                    <Button
                        onPress={ () => this._navigateMedium() }
                        title="Challenge Medium"
                        color="#841584"
                        />
                </View>
                <View style={{ height: 330, width: '70%', backgroundColor:'white'}}>
                    <HardQuest />
                    <Button
                        onPress={ () => this._navigateHard() }
                        title="Challenge Hard"
                        color="#841584"
                        />
                </View>

            </ScrollView>
            </Container>
        );
    }
}

export default NewQuest;
