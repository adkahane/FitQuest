import { START_QUEST, SHOW_MODAL, SET_LOCATION, PUSH_MARKERS, PUSH_SPEED_TIME } from './types.js';

export const startQuest = (started) => {
	return {
		type: START_QUEST, 
		payload: started
	}
}

export const showModal = (visible) => {
	return {
		type: SHOW_MODAL, 
		payload: visible
	}
}

export const setLocation = ({lat, long}) =>{
	return{
		type: SET_LOCATION, 
		payload: { lat, long }
	}
}

export const pushMarkers = ({latitude, longitude, speed, timestamp}) =>{
	return{
		type: PUSH_MARKERS, 
		payload: { latitude, longitude, speed, timestamp }
	}
}

export const pushSpeedTime = ({ speed, timestamp}) =>{
	return{
		type: PUSH_SPEED_TIME,
		payload: { speed, timestamp }
	}
}