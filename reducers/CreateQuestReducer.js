import { START_QUEST, STOP_QUEST, SHOW_MODAL, SET_LOCATION, PUSH_MARKERS } from '../actions/types';

const INITIAL_STATE = {
	polylines: [], 
	speed: [], 
	timestamp: [], 
	latitude: 37.871732795815525,
	longitude: -122.27066792384305, 
	started: false, 
	stopped: false, 
	modalVisible: false
};

export default(state = INITIAL_STATE, action) =>{
	console.log(action.type);
	switch(action.type){
		case START_QUEST:
			return {...state, "started": action.payload }; 
		case STOP_QUEST: 
			const { stopped, started } = action.payload;
			return {...state, "stopped": stopped, "started":  started }
		case SHOW_MODAL: 
			return {...state, "modalVisible": action.payload}
		case SET_LOCATION: 
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