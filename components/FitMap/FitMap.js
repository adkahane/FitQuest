import React, { Component } from 'react';
<<<<<<< HEAD
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

class FitMap extends React.Component {
  state = {
    location: null,
=======
import { Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import styles from './MapStyles.js';
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class FitMap extends React.Component {

  state = {
    location: {
      "coords": {
        "accuracy": 65,
        "altitude": 54.543243408203125,
        "altitudeAccuracy": 10,
        "heading": -1,
        "latitude": 37.871732795815525,
        "longitude": -122.27066792384305,
        "speed": -1,
      },
      "timestamp": 1522374444583.582,
    },
>>>>>>> c9e0342ce7838f60c52b3355314d171a4e136759
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

<<<<<<< HEAD
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
=======
    let location = await Expo.Location.watchPositionAsync(
      {enableHighAccuracy: true, distanceInterval: 5},
      (location)=> {
        console.log(location);
        this.setState({location})
      }
    );
>>>>>>> c9e0342ce7838f60c52b3355314d171a4e136759
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
<<<<<<< HEAD
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
=======
          <MapView
            provider={ MapView.PROVIDER_GOOGLE }
            style={ styles.container }
            showsUserLocation={ true }
            region={
              {latitude: this.state.location.coords.latitude, 
               longitude: this.state.location.coords.longitude, 
               latitudeDelta: LATITUDE_DELTA, 
               longitudeDelta: LONGITUDE_DELTA }
            }/>  
>>>>>>> c9e0342ce7838f60c52b3355314d171a4e136759
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});