import React, { Component } from 'react';
import { Platform, StyleSheet, View, Dimensions, Modal, TouchableHighlight, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { Icon, Container, Header, Content,
				 Left, Body, Title, Right, Button, Text,
				 FooterTab, Footer } from 'native-base';
import { Constants, Location, Permissions, MapView } from 'expo';
import { MapButton, ChallengeMap } from '../common'
import { challengeStartQuest, challengeSetLocation, pushSpeedTime } from '../../actions';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.00420;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

 const tempPolylines = [
			{
			 "latitude": 37.8718325,
			 "longitude": -122.2713344,
			 },
			 {
			 "latitude": 37.8717973,
			 "longitude": -122.2712849,
		 },
		 {
			 "latitude": 37.8718047,
			 "longitude": -122.2712249,
		 },
			{
			 "latitude": 37.8718463,
			 "longitude": -122.2711409,
		 },
			{
			 "latitude": 37.8718732,
			 "longitude": -122.2710757,
		 },
			{
			 "latitude": 37.8718796,
			 "longitude": -122.2710109,
		 },
			{
			 "latitude": 37.8718767,
			 "longitude": -122.2709439,
		 },
			{
			 "latitude": 37.8718652,
			 "longitude": -122.2708808,
		 },
			{
			 "latitude": 37.8718542,
			 "longitude": -122.2708217,
		 },
			{
			 "latitude": 37.8718869,
			 "longitude": -122.2707797,
		 },
			{
			 "latitude": 37.8718324,
			 "longitude": -122.2707568,
		 },
			{
			 "latitude": 37.8717805,
			 "longitude": -122.2707465,
		 },
			{
			 "latitude": 37.8717299,
			 "longitude": -122.2707526,
		 },
			{
			 "latitude": 37.8716739,
			 "longitude": -122.2707694,
		 },
			{
			 "latitude": 37.8716273,
			 "longitude": -122.2707773,
		 },
			{
			 "latitude": 37.8715789,
			 "longitude": -122.2707729,
		 },
			{
			 "latitude": 37.871533,
			 "longitude": -122.2707573,
		 },
			{
			 "latitude": 37.8714742,
			 "longitude": -122.270752,
		 },
			{
			 "latitude": 37.8714284,
			 "longitude": -122.2707441,
		 },
			{
			 "latitude": 37.8713824,
			 "longitude": -122.2707288,
		 },
			{
			 "latitude": 37.8713356,
			 "longitude": -122.2707176,
		 },
			{
			 "latitude": 37.8712785,
			 "longitude": -122.2707109,
		 },
			{
			 "latitude": 37.8712207,
			 "longitude": -122.2707011,
		 },
			{
			 "latitude": 37.8711758,
			 "longitude": -122.2706902,
		 },
			{
			 "latitude": 37.8711183,
			 "longitude": -122.2706789,
		 },
			{
			 "latitude": 37.8710731,
			 "longitude": -122.270677,
		 },
			{
			 "latitude": 37.8710233,
			 "longitude": -122.2706783,
		 },
			{
			 "latitude": 37.8709613,
			 "longitude": -122.2706927,
		 },
			{
			 "latitude": 37.8709089,
			 "longitude": -122.2707012,
		 },
			{
			 "latitude": 37.8708632,
			 "longitude": -122.2707061,
		 },
			{
			 "latitude": 37.8708085,
			 "longitude": -122.2706992,
		 },
			{
			 "latitude": 37.8707555,
			 "longitude": -122.270696,
		 },
			{
			 "latitude": 37.870697,
			 "longitude": -122.2706929,
		 },
			{
			 "latitude": 37.8706519,
			 "longitude": -122.2707006,
		 },
			{
			 "latitude": 37.8706054,
			 "longitude": -122.2707028,
		 },
			{
			 "latitude": 37.8705583,
			 "longitude": -122.2707008,
		 },
			{
			 "latitude": 37.8705078,
			 "longitude": -122.2706936,
		 },
			{
			 "latitude": 37.870456,
			 "longitude": -122.2706881,
		 },
			{
			 "latitude": 37.8704067,
			 "longitude": -122.2706765,
		 },
			{
			 "latitude": 37.8703552,
			 "longitude": -122.2706618,
		 },
			{
			 "latitude": 37.8703051,
			 "longitude": -122.2706501,
		 },
			{
			 "latitude": 37.8702578,
			 "longitude": -122.2706501,
		 },
			{
			 "latitude": 37.8702095,
			 "longitude": -122.2706494,
		 },
			{
			 "latitude": 37.8701613,
			 "longitude": -122.2706538,
		 },
			{
			 "latitude": 37.870113,
			 "longitude": -122.2706605,
		 },
			{
			 "latitude": 37.870046,
			 "longitude": -122.2706724,
		 },
			{
			 "latitude": 37.8699908,
			 "longitude": -122.270681,
		 },
			{
			 "latitude": 37.8699365,
			 "longitude": -122.2706915,
		 },
			{
			 "latitude": 37.869885,
			 "longitude": -122.2706962,
		 },
			{
			 "latitude": 37.8698285,
			 "longitude": -122.2706917,
		 },
			{
			 "latitude": 37.8697756,
			 "longitude": -122.2706774,
		 },
			{
			 "latitude": 37.8697195,
			 "longitude": -122.2706587,
		 },
			{
			 "latitude": 37.8696614,
			 "longitude": -122.2706442,
		 },
			{
			 "latitude": 37.8696156,
			 "longitude": -122.270633,
		 },
			{
			 "latitude": 37.8695683,
			 "longitude": -122.2706235,
		 },
			{
			 "latitude": 37.8695212,
			 "longitude": -122.2706276,
		 },
			{
			 "latitude": 37.869475,
			 "longitude": -122.2706332,
		 },
			{
			 "latitude": 37.8694176,
			 "longitude": -122.2706458,
		 },
			{
			 "latitude": 37.8693622,
			 "longitude": -122.2706532,
		 },
			{
			 "latitude": 37.8693155,
			 "longitude": -122.2706537,
		 },
			{
			 "latitude": 37.8692606,
			 "longitude": -122.2706583,
		 },
			{
			 "latitude": 37.8692207,
			 "longitude": -122.2706892,
		 },
			{
			 "latitude": 37.8692053,
			 "longitude": -122.2707522,
		 },
			{
			 "latitude": 37.8691979,
			 "longitude": -122.2708148,
		 },
			{
			 "latitude": 37.8691844,
			 "longitude": -122.2708734,
		 },
			{
			 "latitude": 37.8691806,
			 "longitude": -122.2709309,
		 },
			{
			 "latitude": 37.8691801,
			 "longitude": -122.270997,
		 },
			{
			 "latitude": 37.8691865,
			 "longitude": -122.2710557,
		 },
			{
			 "latitude": 37.8691629,
			 "longitude": -122.2711105,
		 },
			{
			 "latitude": 37.8691369,
			 "longitude": -122.2711643,
		 },
			{
			 "latitude": 37.8691086,
			 "longitude": -122.2712288,
		 },
			{
			 "latitude": 37.8690941,
			 "longitude": -122.2712873,
		 },
			{
			 "latitude": 37.8690868,
			 "longitude": -122.2713469,
		 },
			{
			 "latitude": 37.8690815,
			 "longitude": -122.2714146,
		 },
			{
			 "latitude": 37.8690759,
			 "longitude": -122.2714873,
		 },
			{
			 "latitude": 37.8690585,
			 "longitude": -122.2715515,
		 },
			{
			 "latitude": 37.8690467,
			 "longitude": -122.2716194,
		 },
			{
			 "latitude": 37.8690447,
			 "longitude": -122.2716832,
		 },
			{
			 "latitude": 37.869047,
			 "longitude": -122.2717475,
		 },
			{
			 "latitude": 37.8690475,
			 "longitude": -122.271812,
		 },
			{
			 "latitude": 37.8690477,
			 "longitude": -122.2718723,
		 },
			{
			 "latitude": 37.8690481,
			 "longitude": -122.271931,
		 },
			{
			 "latitude": 37.8690508,
			 "longitude": -122.2719944,
		 },
			{
			 "latitude": 37.8690618,
			 "longitude": -122.2720647,
		 },
			{
			 "latitude": 37.8690557,
			 "longitude": -122.2721328,
		 },
			{
			 "latitude": 37.8690654,
			 "longitude": -122.2722048,
		 },
			{
			 "latitude": 37.8690879,
			 "longitude": -122.2722736,
		 },
			{
			 "latitude": 37.8691222,
			 "longitude": -122.2723337,
		 },
			{
			 "latitude": 37.8691689,
			 "longitude": -122.2723813,
		 },
			{
			 "latitude": 37.8692114,
			 "longitude": -122.2724079,
		 },
			{
			 "latitude": 37.8692553,
			 "longitude": -122.2724298,
		 },
			{
			 "latitude": 37.869297,
			 "longitude": -122.2724523,
		 },
			{
			 "latitude": 37.8693473,
			 "longitude": -122.2724898,
		 },
			{
			 "latitude": 37.8693935,
			 "longitude": -122.2725182,
		 },
			{
			 "latitude": 37.8694458,
			 "longitude": -122.2725333,
		 },
			{
			 "latitude": 37.8694991,
			 "longitude": -122.2725475,
		 },
			{
			 "latitude": 37.8695523,
			 "longitude": -122.2725635,
		 },
			{
			 "latitude": 37.8696048,
			 "longitude": -122.272593,
		 },
			{
			 "latitude": 37.869644,
			 "longitude": -122.2726376,
		 },
			{
			 "latitude": 37.8696941,
			 "longitude": -122.2726686,
		 },
			{
			 "latitude": 37.869752,
			 "longitude": -122.2726824,
		 },
			{
			 "latitude": 37.8698069,
			 "longitude": -122.2726947,
		 },
			{
			 "latitude": 37.8698566,
			 "longitude": -122.2727032,
		 },
			{
			 "latitude": 37.869911,
			 "longitude": -122.2727217,
		 },
			{
			 "latitude": 37.8699628,
			 "longitude": -122.2727268,
		 },
			{
			 "latitude": 37.8700132,
			 "longitude": -122.2727361,
		 },
			{
			 "latitude": 37.8700669,
			 "longitude": -122.2727492,
		 },
			{
			 "latitude": 37.8701189,
			 "longitude": -122.2727583,
		 },
			{
			 "latitude": 37.8701695,
			 "longitude": -122.2727685,
		 },
			{
			 "latitude": 37.870221,
			 "longitude": -122.2727827,
		 },
			{
			 "latitude": 37.8702714,
			 "longitude": -122.2727912,
		 },
			{
			 "latitude": 37.8703226,
			 "longitude": -122.2728043,
		 },
			{
			 "latitude": 37.870376,
			 "longitude": -122.2728109,
		 },
			{
			 "latitude": 37.8704213,
			 "longitude": -122.2728157,
		 },
			{
			 "latitude": 37.8704803,
			 "longitude": -122.2728212,
		 },
			{
			 "latitude": 37.8705315,
			 "longitude": -122.2728169,
		 },
			{
			 "latitude": 37.8705888,
			 "longitude": -122.2728127,
		 },
			{
			 "latitude": 37.870644,
			 "longitude": -122.2728095,
		 },
			{
			 "latitude": 37.8706955,
			 "longitude": -122.2728097,
		 },
			{
			 "latitude": 37.8707469,
			 "longitude": -122.2728099,
		 },
			{
			 "latitude": 37.8708064,
			 "longitude": -122.2728068,
		 },
			{
			 "latitude": 37.8708601,
			 "longitude": -122.2728201,
		 },
			{
			 "latitude": 37.8709056,
			 "longitude": -122.2728222,
		 },
			{
			 "latitude": 37.8709622,
			 "longitude": -122.2728252,
		 },
			{
			 "latitude": 37.8710109,
			 "longitude": -122.2728404,
		 },
			{
			 "latitude": 37.8710564,
			 "longitude": -122.2728585,
		 },
			{
			 "latitude": 37.8711121,
			 "longitude": -122.2728656,
		 },
			{
			 "latitude": 37.871171,
			 "longitude": -122.2728624,
		 },
			{
			 "latitude": 37.8712205,
			 "longitude": -122.2728481,
		 },
			{
			 "latitude": 37.87127,
			 "longitude": -122.2728326,
		 },
			{
			 "latitude": 37.8713151,
			 "longitude": -122.2728241,
		 },
			{
			 "latitude": 37.8713719,
			 "longitude": -122.2728253,
		 },
			{
			 "latitude": 37.8714286,
			 "longitude": -122.272828,
		 },
			{
			 "latitude": 37.8714587,
			 "longitude": -122.2727857,
		 },
			{
			 "latitude": 37.8714565,
			 "longitude": -122.2727195,
		 },
			{
			 "latitude": 37.8714596,
			 "longitude": -122.2726578,
		 },
			{
			 "latitude": 37.8714655,
			 "longitude": -122.2725883,
		 },
			{
			 "latitude": 37.8714768,
			 "longitude": -122.2725247,
		 },
			{
			 "latitude": 37.8714993,
			 "longitude": -122.2724665,
		 },
			{
			 "latitude": 37.871527,
			 "longitude": -122.2724202,
		 },
			{
			 "latitude": 37.8715578,
			 "longitude": -122.2723783,
		 },
			{
			 "latitude": 37.8715939,
			 "longitude": -122.2723225,
		 },
			{
			 "latitude": 37.8716207,
			 "longitude": -122.272275,
		 },
			{
			 "latitude": 37.8716359,
			 "longitude": -122.2722191,
		 },
			{
			 "latitude": 37.8716576,
			 "longitude": -122.272161,
		 },
			{
			 "latitude": 37.8716875,
			 "longitude": -122.2720876,
		 },
			{
			 "latitude": 37.8717035,
			 "longitude": -122.2720342,
		 },
			{
			 "latitude": 37.871706,
			 "longitude": -122.2719637,
		 },
			{
			 "latitude": 37.8717155,
			 "longitude": -122.2718964,
		 },
			{
			 "latitude": 37.8717395,
			 "longitude": -122.2718401,
		 },
			{
			 "latitude": 37.8717665,
			 "longitude": -122.2717745,
		 },
			{
			 "latitude": 37.8717823,
			 "longitude": -122.2717203,
		 },
			{
			 "latitude": 37.8717937,
			 "longitude": -122.2716621,
		 },
			{
			 "latitude": 37.8717984,
			 "longitude": -122.2716051,
		 },
			{
			 "latitude": 37.8717936,
			 "longitude": -122.2715392,
		 },
			{
			 "latitude": 37.8717828,
			 "longitude": -122.2714691,
		 },
			{
			 "latitude": 37.871772,
			 "longitude": -122.2713979,
		 },
			{
			 "latitude": 37.8717699,
			 "longitude": -122.27133,
		 },
			{
			 "latitude": 37.8717748,
			 "longitude": -122.2712648,
		 },
			{
			 "latitude": 37.8717815,
			 "longitude": -122.2711978,
		 },
			{
			 "latitude": 37.8717817,
			 "longitude": -122.2711399,
		 },
			{
			 "latitude": 37.8717841,
			 "longitude": -122.271081,
		 },
			{
			 "latitude": 37.8717846,
			 "longitude": -122.2710024,
		 },
			{
			 "latitude": 37.8717939,
			 "longitude": -122.2709303,
		 },
			{
			 "latitude": 37.8718002,
			 "longitude": -122.2708701,
		 },
			{
			 "latitude": 37.8718074,
			 "longitude": -122.2708137,
		 },
	 ];

class ChallengeQuest extends Component {


  static navigationOptions = {
	  drawerLabel: () => (
		  <Text
			  style={{ color: '#aa076b', fontWeight: 'bold', fontSize: 20, lineHeight: 50  }}
		  >Challenge Quest</Text>
	  ),
    drawerIcon: (
      <Image source={ require('../../assets/icons/challengeQuest.png') }
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
				const { latitude , longitude } = location.coords;
				this.props.challengeSetLocation({lat: latitude, long: longitude});
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

				const { speed, latitude, longitude } = location.coords;

				if(this.props.started){
					this.props.pushSpeedTime({ speed: speed, timestamp: location.timestamp });
				}

				this.props.challengeSetLocation({lat: latitude, long: longitude});
			}
		);
	};

    renderMap() {
            return (
                <ChallengeMap
                    location={
						{ latitude: this.props.latitude,
						longitude: this.props.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA }
					}
                    polylines={ tempPolylines }
					started={ this.props.started }
                />
            )

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
				</Content>

				<Footer>
					<FooterTab style={{ backgroundColor: "#52c234" }}>
						<Button vertical onPress={ ()=>this.props.challengeStartQuest(true) }>
							<Icon name='controller-play' type='Entypo' />
							<Text>Start</Text>
						</Button>
						<Button vertical onPress={ ()=>this.props.challengeStartQuest(false) }>
							<Icon name='controller-stop' type='Entypo' />
							<Text>Stop</Text>
						</Button>
						<Button vertical onPress={ ()=>this.resetValues() }>
							<Icon name='cancel' type='MaterialIcons' />
							<Text> Abort </Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
        );
    }
}

///Maps the props from the reducers to get the appropriate piece of state in the component.
const mapStateToProps = (state) => {
	const { speed, timestamp, latitude, longitude, started } = state.challengeQuest;

	return { speed, timestamp, latitude, longitude, started };
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
        alignItems: 'flex-start'
    }
});

export default connect(mapStateToProps, { challengeStartQuest, challengeSetLocation, pushSpeedTime })(ChallengeQuest);