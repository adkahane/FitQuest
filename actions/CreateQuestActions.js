import { START_QUEST, STOP_QUEST, SHOW_MODAL } from './types.js';

export const startQuest = (started) => {
	return {
		type: START_QUEST, 
		payload: started
	}
}

export const stopQuest = ({started, stopped}) => {
	return {
		type: STOP_QUEST, 
		payload: {started, stopped}
	}
}

export const showModal = (visible) => {
	return {
		type: SHOW_MODAL, 
		payload: visible
	}
}