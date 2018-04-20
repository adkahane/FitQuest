import React from 'react';
import { StyleSheet, Image } from 'react-native';
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
		width: 100, 
		borderRadius: 50
	}
});

const CustomDrawerContentComponent = (props) =>(
	<Container> 
		<Header style={{ height: 150 }}> 
			<Body> 
				<Image style={ styles.drawerImage } source={ require('../../assets/images/art2.png') }/>
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
