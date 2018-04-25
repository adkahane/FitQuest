import { CHALLENGE_START_QUEST, CHALLENGE_SET_LOCATION, ADD_MARKERS, ABORT_CHALLENGE, ADD_CHALLENGE_LINES } from '../actions/types';
import pastQuestLines from './pastQuestLines.json';

const INITIAL_STATE = {
	speed: [],
	timestamp: [],
	challengerLines: [],
	pastQuestLines: pastQuestLines,
	latitude: 37.871732795815525,
	longitude: -122.27066792384305,
	started: false
};

export default(state = INITIAL_STATE, action) =>{
	switch(action.type){
		case CHALLENGE_START_QUEST:
			return {...state, "started": action.payload };
		case CHALLENGE_SET_LOCATION:
			const { lat, long } = action.payload;
			return {...state, "latitude": lat, "longitude": long}
		case ADD_MARKERS:
			const {  latitude , longitude, speed, timestamp } = action.payload;
			return {...state,
					"challengerLines": [...state.challengerLines, { "latitude": latitude, "longitude": longitude }],
					"speed": [...state.speed, speed],
					"timestamp": [...state.timestamp, timestamp]
					}
		case ADD_CHALLENGE_LINES: 
			return {...state, "pastQuestLines": action.payload }
		case ABORT_CHALLENGE:
			return INITIAL_STATE
		default:
			return state;
	}
}
