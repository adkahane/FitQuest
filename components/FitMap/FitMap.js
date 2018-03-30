import React, { Component } from 'react';
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

    let location = await Expo.Location.watchPositionAsync(
      {enableHighAccuracy: true, distanceInterval: 5},
      (location)=> {
        console.log(location);
        this.setState({location})
      }
    );
  };

  render() {
    return (
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
    );
  }
}

export default FitMap; 
