import React from 'react';
import { ButtonGroup, Button } from 'react-native-elements';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
//Screens for the Navigation
import Home from './../Home';
import Stats from './../Stats';
import CreateQuest from './../CreateQuest';
import ChallengeQuest from './../ChallengeQuest/ChallengeQuest';

export const DrawerStack = DrawerNavigator({
    Home: { screen: Home },
    Stats: { screen: Stats },
    CreateQuest: { screen: CreateQuest },
    ChallengeQuest: { screen: ChallengeQuest }
});
