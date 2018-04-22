import React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';

const ChallengeMap = (props) => {
	/*Renders the Mapview with updated region when user moves. And polylines that draw where the user has gone.*/
		const { MapStyle } = styles;

		if ('polylines' in props){
			return (
				<MapView
					provider={ MapView.PROVIDER_GOOGLE }
					style={ MapStyle }
					showsUserLocation={ true }
					region={ props.location }>
						<MapView.Polyline
							coordinates={ props.polylines.map(polyline=>polyline) }
							strokeColor="#66CD00"
							strokeWidth={3}
						/>
						<MapView.Marker
							coordinate={ props.polylines[0] }
							image={ require('../../assets/icons/startButton.png')}
						/>
						{	!props.started ? (
								<MapView.Marker
									coordinate={ props.polylines[props.polylines.length-1] }
									image={ require('../../assets/icons/finish.png')}
								/>
							): null
						}
				</MapView>
			);
		}
		return (
				<MapView
					provider={ MapView.PROVIDER_GOOGLE }
					style={ MapStyle }
					showsUserLocation={ true }
					region={ props.location }>
				</MapView>
		);
}

const styles = StyleSheet.create({
  MapStyle: {
  	height: '100%',
    width: '100%',
  },
});

export { ChallengeMap };
