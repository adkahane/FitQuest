import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Dimensions } from 'react-native';
import { Constants, Location, Permissions, MapView} from 'expo';
import Camera from '../../components/Camera/camera.js';
import { Button, Map } from '../common'

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class CreateQuest extends Component {

	state = {
		quest: {
			polylines: [],
			speed: [],
			timestamp: []
		},
		location: {
			latitude:  37.871732795815525,
			longitude:  -122.27066792384305
		} 
	};

	/*Makes sure the component is mounted before the virtual DOM is rendered*/
	componentWillMount() {
		//Make sure Android is not a simulator (Won't work for Android Simulator)
		if (Platform.OS === 'android' && !Constants.isDevice) {
			this.setState({
				errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
			});
		} else {
			this._getLocationAsync();
			this._updateLocationAsync();
		}
	}

	/*Gets the Initial Position of the user. Uses async to wait for permissions and to allow google to return position.*/
	 _getLocationAsync = async () => {
	    let { status } = await Permissions.askAsync(Permissions.LOCATION);
	    if (status !== 'granted') {
	      this.setState({
	        errorMessage: 'Permission to access location was denied',
	      });
	    }

	    let location = await Location.getCurrentPositionAsync({});
	    this.setState({location: { latitude: location.coords.latitude, longitude: location.coords.longitude } });
  	};


	/*Updates the users positon every 5 meters. Uses async to wait for permissions and to allow google to return position.
	Also Keeps track of the different lats and longs that the user is going on their quest, their speed and time.*/
	_updateLocationAsync = async () => {
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
    	const { MapPageStyle, ButtonViewStyle } = styles; 
        /*Renders the Mapview with updated region when user moves. And polylines that draw where the user has gone.*/
        return (  
            <View style={ MapPageStyle }>
            	<Map 
	            	region={
	            	 	{ latitude: this.state.location.latitude, 
						  longitude: this.state.location.longitude, 
						  latitudeDelta: LATITUDE_DELTA, 
						  longitudeDelta: LONGITUDE_DELTA }
					}
	            	coordinates={this.state.quest.polylines.map((polyline)=>polyline)}
            	/>
            	<View style={ ButtonViewStyle }>
		    		<Button buttonText="Start" onPress={()=>console.log("Start Was Pressed")}/>
		          	<Button buttonText="Stop" onPress={()=>console.log("Stop Was Pressed")}/>
		          	<Button buttonText="Abort" onPress={()=>console.log("Abort Was Pressed")}/>
		          	<Button buttonText="Open Camera" onPress={()=>console.log("Open Camera Was Pressed")}/>
		        </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MapPageStyle: {
    	flex: 1,
        backgroundColor: 'white',
    },
    ButtonViewStyle: {
    	flex: 1, 
    	flexDirection: 'row'
    }
});

export default CreateQuest;