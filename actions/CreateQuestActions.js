import { START_QUEST } from './types.js';

export const startQuest = (started) => {
	return {
		type: START_QUEST, 
		payload: started
	}
}