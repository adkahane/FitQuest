import { CREATE_START_QUEST, SHOW_MODAL, CREATE_SET_LOCATION, PUSH_MARKERS } from '../actions/types';

const INITIAL_STATE = {
	polylines: [], 
	speed: [], 
	timestamp: [], 
	latitude: 37.871732795815525,
	longitude: -122.27066792384305, 
	started: false, 
	modalVisible: false
};

export default(state = INITIAL_STATE, action) =>{
	switch(action.type){
		case CREATE_START_QUEST:
			return {...state, "started": action.payload }; 
		case SHOW_MODAL: 
			return {...state, "modalVisible": action.payload}
		case CREATE_SET_LOCATION: 
			const { lat, long } = action.payload;
			return {...state, "latitude": lat, "longitude": long}
		case PUSH_MARKERS: 
			const { latitude, longitude, speed, timestamp } = action.payload;
			return {...state, 
					"polylines": [...state.polylines, {"latitude": latitude, "longitude": longitude}], 
					"speed": [...state.speed, speed], 
					"timestamp": [...state.timestamp, timestamp]
				   } 
		default: 
			return state; 
	}
}