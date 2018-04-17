import React from 'react';
import { ButtonGroup, Button } from 'react-native-elements';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
//Screens for the Navigation
import Home from './../Home';
import Stats from './../Stats';
import CreateQuest from './../CreateQuest';
import ChallengeQuest from './../ChallengeQuest/ChallengeQuest';

// drawer stack
export const DrawerStack = DrawerNavigator({
  Home: { screen: Home },
  Stats: { screen: Stats },
  screen3: { screen: CreateQuest },
  screen4: { screen: ChallengeQuest }
})

/*const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Logged In to your app!',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
}); */
