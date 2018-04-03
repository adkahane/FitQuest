import React from 'react';
import { StyleSheet } from 'react-native';
import { MapView } from 'expo';
// import styles from './MapStyles.js';

const Map = (props) => {
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
							strokeColor="#000"
							strokeWidth={3}
						/>
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
  	height: '57%',
    width: '100%',
    flexDirection: 'column',
    alignItems: "flex-start"
  },
});


export { Map }; 
