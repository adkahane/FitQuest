import React from 'react';
import { StyleSheet, Image, Platform } from 'react-native';
import { ButtonGroup, Button } from 'react-native-elements';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Header, Body, Content } from 'native-base';
//Screens for the Navigation
import Home from './../Home';
import Stats from './../Stats';
import CreateQuest from './../CreateQuest';
import ChallengeQuest from './../ChallengeQuest/ChallengeQuest';
import NewQuest from './../NewQuest';

const styles = StyleSheet.create({
	drawerImage: {
		height: 100,
		width: 200
	}
});

const CustomDrawerContentComponent = (props) =>(
	<Container>
		<Header style={{ height: 150, backgroundColor: '#52c234', alignSelf: 'center', paddingTop: 40 }}>
			<Body>
				<Image style={ styles.drawerImage } source={require('../../assets/images/logo.png')}/>
			</Body>
		</Header>
		<Content>
			<DrawerItems { ...props } />
		</Content>
	</Container>
);


export const DrawerStack = DrawerNavigator({
    Home: { screen: Home },
    Stats: { screen: Stats },
    CreateQuest: { screen: CreateQuest },
		ChallengeQuest: { screen: ChallengeQuest },
		NewQuest: { screen: NewQuest }
	},{
		initialRouteName: 'Home',
		contentComponent: CustomDrawerContentComponent,
		drawerOpenRoute: 'DrawerOpen',
		drawerCloseRoute: 'DrawerClose',
		drawerToggleRoute: 'DrawerToggle'
	}
);
