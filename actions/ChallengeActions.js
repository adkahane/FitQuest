import { CHALLENGE_START_QUEST, CHALLENGE_SET_LOCATION, ADD_MARKERS, ABORT_CHALLENGE } from './types.js';

export const challengeStartQuest = (started) => {
	return {
		type: CHALLENGE_START_QUEST,
		payload: started
	}
}

export const challengeSetLocation = ({ lat, long }) => {
	return {
		type: CHALLENGE_SET_LOCATION,
		payload: { lat, long }
	}
}

export const addMarkers = ({ latitude, longitude, speed, timestamp }) => {
	return {
		type: ADD_MARKERS,
		payload: { latitude, longitude, speed, timestamp }
	}
}

export const abortChallenge = () => {
	return {
		type: ABORT_CHALLENGE
	}
}
