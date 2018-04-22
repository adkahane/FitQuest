import { combineReducers } from 'redux';
import CreateQuestReducer from './CreateQuestReducer';
import ChallengeQuestReducer from './ChallengeQuestReducer';

export default combineReducers({
	createQuest: CreateQuestReducer,
	challengeQuest: ChallengeQuestReducer
});
