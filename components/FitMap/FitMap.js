import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import { Constants, Location, Permissions, MapView} from 'expo';
import styles from './MapStyles.js';
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00522;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class FitMap extends React.Component {

	state = {
		quest: {
			polylines: [],
			speed: [],
			timestamp: [],
			polyId: 5 
		},
		location: {
			latitude:  37.871732795815525,
			longitude:  -122.27066792384305
		} 
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
				this.state.quest.polylines.push({latitude: location.coords.latitude, longitude: location.coords.longitude})
				this.state.quest.speed.push(location.coords.speed);
				this.state.quest.timestamp.push(location.timestamp);
				this.setState({location: { latitude: location.coords.latitude, longitude: location.coords.longitude } })
			}
		);
	};

	render() {
		 const stuff = this.state.quest.coordinates;
		return (
					<MapView
						provider={ MapView.PROVIDER_GOOGLE }
						style={ styles.container }
						showsUserLocation={ true }
						region={
							{latitude: this.state.location.latitude, 
							 longitude: this.state.location.longitude, 
							 latitudeDelta: LATITUDE_DELTA, 
							 longitudeDelta: LONGITUDE_DELTA }
						}> 
								<MapView.Polyline
									coordinates={this.state.quest.polylines.map((polyline)=>polyline)}
									strokeColor="#000"
									strokeWidth={3}
								/>
						</MapView>
		);
	}
}

export default FitMap; 
