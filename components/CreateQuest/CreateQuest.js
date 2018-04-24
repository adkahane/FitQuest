import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions, Modal, Image } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import { connect } from 'react-redux';
import { Icon, Container, Header, Content,
				 Left, Body, Title, Right, Button, Text,
				 FooterTab, Footer } from 'native-base';
import { createStartQuest, showModal, createSetLocation, pushMarkers, abortCreate } from '../../actions';
import Camera from '../../components/Camera/camera.js';
import { MapButton, CreateMap } from '../common';
// const Quest = require('../../server/models/Quest');
let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class CreateQuest extends Component {

	static navigationOptions = {
		drawerLabel: () => (
			<Text
				style={{ color: '#aa076b', fontWeight: 'bold', fontSize: 20, lineHeight: 50  }}
			>Create Quest</Text>
		),
		drawerIcon: (
			<Image source={ require('../../assets/icons/createQuest.png') }
				   style={{ height: 24, width: 24 }} />
		)
	}

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
	    const { latitude, longitude } = location.coords;
	    this.props.createSetLocation({lat: latitude, long: longitude});
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
			{enableHighAccuracy: true, distanceInterval: 20},
			(location)=> {

				const { latitude, longitude, speed } = location.coords;

				if(this.props.started){
					this.props.pushMarkers({latitude: latitude, longitude: longitude, speed: speed, timestamp: location.timestamp});
				}

				this.props.createSetLocation({lat: latitude, long: longitude});
			}
		);
	};

	renderMap(){
		if(this.props.polylines.length > 1){
			return (
				<CreateMap
					location={
						{ latitude: this.props.latitude,
						longitude: this.props.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA }
					}
					polylines={[...this.props.polylines]}
					started={ this.props.started }
        		/>
			)
		}

		return (
			<CreateMap
				location={
					{ latitude: this.props.latitude,
					longitude: this.props.longitude,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA }
				}
      />
		)
	}

	abortQuest(){
		this.props.abortCreate();
		this.props.navigation.navigate('Home');
	}

  render() {
  	const { MapPageStyle, ButtonViewStyle } = styles;
      /*Renders the Mapview with updated region when user moves. And polylines that draw where the user has gone.*/

      return (
      	<Container>
			<Header style={{ paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: '#aa076b'}}>
      			<Left>
					<Icon name="ios-menu" style={{ color: '#fff' }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />
      			</Left>
      			<Body>
					<Title style={{ color: '#fff' }}>FitQuest</Title>
      			</Body>
      			<Right />
      		</Header>

          	<Content contentContainerStyle={ MapPageStyle }>
            	{this.renderMap()}
				<View style={ ButtonViewStyle }>
					<Modal
						animationType="slide"
						transparent={false}
						visible={this.props.modalVisible}
						onRequestClose={() => {
							alert('Modal has been closed.');
						}}>
						<View style={{marginTop: 0, opacity: .9999, height: '100%'}}>
							<Camera />
							<Button block success
								onPress={() => this.props.showModal(false)}>
								<Text>Close Camera</Text>
							</Button>
						</View>
					</Modal>
				</View>
			</Content>

			<Footer>
				<FooterTab style={{ backgroundColor: "#52c234" }}>
					<Button vertical onPress={ ()=>this.props.createStartQuest(true) }>
						<Icon name='controller-play' type='Entypo' />
						<Text>Start</Text>
					</Button>
					<Button vertical onPress={ ()=>this.props.createStartQuest(false) }>
						<Icon name='controller-stop' type='Entypo' />
						<Text>Stop</Text>
					</Button>
					<Button vertical onPress={ ()=>this.abortQuest() }>
						<Icon name='cancel' type='MaterialIcons' />
						<Text> Abort </Text>
					</Button>
					<Button onPress={ ()=>this.props.showModal(true) }>
						<Icon name='camera' type='Entypo' />
					</Button>
				</FooterTab>
			</Footer>
		</Container>
    );
  }
}

///Maps the props from the reducers to get the appropriate piece of state in the component.
const mapStateToProps = (state) => {
	const { polylines, speed, timestamp, latitude, longitude, started, modalVisible } = state.createQuest;

	return { polylines, speed, timestamp, latitude, longitude, started, modalVisible };
}

const styles = StyleSheet.create({
    MapPageStyle: {
    	flex: 1,
      backgroundColor: 'white'
    },
    ButtonViewStyle: {
			width: '100%',
			height: '60%',
			flexDirection: 'row',
			alignItems: 'flex-start',
			justifyContent: 'flex-end'
    }
});

export default connect(mapStateToProps, { createStartQuest, showModal, createSetLocation, pushMarkers, abortCreate })(CreateQuest);
