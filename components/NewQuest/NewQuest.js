import React from 'react';
import { StyleSheet, View, ScrollView,  Component,  Image, Platform } from 'react-native';
import { Icon, Container, Header, Content, Left, Title, Body, Right, Text, Button } from 'native-base';
import EasyQuest from '../../components/EasyQuest';
import easyLines from '../../components/EasyQuest/easy-quest.json';
import MediumQuest from '../../components/MediumQuest';
import mediumLines from '../../components/MediumQuest/medium-quest.json';
import HardQuest from '../../components/HardQuest';
import hardLines from '../../components/HardQuest/hard-quest.json';
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
        this.props.navigation.navigate('Challenge', { questLines: easyLines });
    }

    // Navigate to the challenge medium-quest page
    async _navigateMedium() {
        console.log("medium");
        this.props.navigation.navigate('Challenge', { questLines: mediumLines });
    }

    // Navigate to the challenge hard-quest page
    async _navigateHard() {
        console.log("hard");
        this.props.navigation.navigate('Challenge', { questLines: hardLines });
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
                <View style={{height:330, width: '70%', backgroundColor:'white', marginTop: 30 }}>
                    <EasyQuest />
                    <Button
                        onPress={ () => this._navigateEasy() }
                        block
                        success
                        >
                        <Text>Challenge Easy</Text>
                    </Button>
                </View>
                <View style={{ height: 330, width: '70%', backgroundColor:'white', marginTop: 30 }}>
                    <MediumQuest />
                    <Button
                        onPress={ () => this._navigateMedium() }
                        block
                        success                        >
                        <Text>Challenge Medium</Text>
                    </Button>    
                </View>
                <View style={{ height: 330, width: '70%', backgroundColor:'white', marginTop: 30 }}>
                    <HardQuest />
                    <Button
                        onPress={ () => this._navigateHard() }
                        block
                        success                        >
                        <Text>Challenge Hard</Text>
                    </Button>    
                </View>

            </ScrollView>
            </Container>
        );
    }
}

export default NewQuest;
