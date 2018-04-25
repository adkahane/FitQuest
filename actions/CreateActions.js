import { CREATE_START_QUEST, SHOW_MODAL, CREATE_SET_LOCATION, PUSH_MARKERS, ABORT_CREATE } from './types.js';

export const createStartQuest = (started) => {
	return {
		type: CREATE_START_QUEST,
		payload: started
	}
}

export const showModal = (visible) => {
	return {
		type: SHOW_MODAL,
		payload: visible
	}
}

export const createSetLocation = ({ lat, long }) =>{
	return{
		type: CREATE_SET_LOCATION,
		payload: { lat, long }
	}
}

export const pushMarkers = ({ latitude, longitude, speed, timestamp }) =>{
	return{
		type: PUSH_MARKERS,
		payload: { latitude, longitude, speed, timestamp }
	}
}

export const abortCreate = () =>{
	return {
		type: ABORT_CREATE
	}
}
