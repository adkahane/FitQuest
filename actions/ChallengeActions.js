import { CHALLENGE_START_QUEST, CHALLENGE_SET_LOCATION, PUSH_SPEED_TIME, ABORT_CHALLENGE } from './types.js';

export const challengeStartQuest = (started) => {
	return {
		type: CHALLENGE_START_QUEST,
		payload: started
	}
}

export const challengeSetLocation = ({lat, long}) => {
	return {
		type: CHALLENGE_SET_LOCATION,
		payload: { lat, long }
	}
}

export const pushSpeedTime = ({ speed, timestamp}) => {
	return {
		type: PUSH_SPEED_TIME,
		payload: { speed, timestamp }
	}
}

export const abortChallenge = () => {
	return {
		type: ABORT_CHALLENGE
	}
}
