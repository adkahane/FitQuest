import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DrawerNavigator, SwitchNavigator } from 'react-navigation';
import reducers from './reducers';
import MyHeader from './components/MyHeader';
import { Spinner } from './components/common';
import { AppSwitchNavigator } from './components/Login/GoogleLogin';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
      loggedIn: false,
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded){
      return (
         <Provider store={ createStore(reducers) }>
            <View style={ styles.container }>
              <AppSwitchNavigator />
            </View>
         </Provider>
      );
    }
    else {
      return <Spinner />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
