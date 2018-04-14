import { START_QUEST, STOP_QUEST, SHOW_MODAL } from '../actions/types';

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
		default: 
			return state; 
	}
}