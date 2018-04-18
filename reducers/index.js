import { combineReducers } from 'redux';
import CreateQuestReducer from './CreateQuestReducer';

export default combineReducers({
	createQuest: CreateQuestReducer
});