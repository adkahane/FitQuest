import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Dimensions, Modal, TouchableHighlight, Image } from 'react-native';
import { Constants, Location, Permissions, MapView} from 'expo';
import Camera from '../../components/Camera/camera.js';
import { MapButton, Map, Button } from '../common'

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class CreateQuest extends Component {

	state = {
		quest: {
			polylines: [],
			speed: [0,0],
			timestamp: [0,0],
		},
		location: {
			latitude:  37.871732795815525,
			longitude:  -122.27066792384305
		},
		started: false,
		stopped: false,
		modalVisible: false, 
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
				if(this.state.started){
					this.state.mapData.polylines.push({ latitude: location.coords.latitude, longitude: location.coords.longitude });
					//this.state.quest.speed.push({speed: location.coords.speed});
					//this.state.quest.timestamp.push({time: location.timestamp});
				}
				else if(!this.state.stopped) {
					this.setState({ mapData: { polylines: [{ latitude: location.coords.latitude, longitude: location.coords.longitude }] } })
				}

				this.setState({ location: { latitude: location.coords.latitude, longitude: location.coords.longitude } })
			}
		);
	};

	/* Set the visibility state of the camera modal */
	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	endQuest(){
		//Find out How to store polylines, speed, and time
		console.log("QUEST STOPPED");
		this.setState({ started: false });
		this.setState({ stopped: true });
	}


	renderMap(){
		if(this.state.mapData.polylines.length > 1){
			return (	
				<Map 
	            	location={
	            	 	{ latitude: this.state.location.latitude, 
						  longitude: this.state.location.longitude, 
						  latitudeDelta: LATITUDE_DELTA, 
						  longitudeDelta: LONGITUDE_DELTA }
					}
	            	polylines={[...this.state.mapData.polylines]}
            	/>
			)
		}

		return (
			<Map 
            	location={
            	 	{ latitude: this.state.location.latitude, 
					  longitude: this.state.location.longitude, 
					  latitudeDelta: LATITUDE_DELTA, 
					  longitudeDelta: LONGITUDE_DELTA }
				}
            />
		)

	}

    render() {
    	const { MapPageStyle, ButtonViewStyle } = styles; 
        /*Renders the Mapview with updated region when user moves. And polylines that draw where the user has gone.*/
        return (  
            <View style={ MapPageStyle }>
            	{this.renderMap()}
							<View style={ ButtonViewStyle }>
							
							<Modal
								animationType="slide"
								transparent={false}
								visible={this.state.modalVisible}
								onRequestClose={() => {
									alert('Modal has been closed.');
								}}>
								<View style={{marginTop: 0, opacity: .9999, height: '100%'}}>
								
									<Camera />
								
									<Button
										onPress={() => {
											this.setModalVisible(!this.state.modalVisible);
										}}>
										<Text>Close Camera</Text>
									</Button>
								</View>
							</Modal>

		    		<MapButton buttonText="Start" onPress={()=>this.setState({ started: true })}/>
		          	<MapButton buttonText="Stop" onPress={()=>this.endQuest()}/>
		          	<MapButton buttonText="Abort" onPress={()=>this.resetValues()}/>
		          	<MapButton buttonText="Camera" onPress={()=>this.setModalVisible(true)}/>
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
		width: '100%',
		height: '60%', 
		flexDirection: 'row',
		alignItems: 'flex-start'
    }
});

export default CreateQuest;