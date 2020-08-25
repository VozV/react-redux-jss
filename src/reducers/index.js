import { combineReducers } from 'redux';
import tasks from './tasks';
import filters from './filters';
import users from "./users";

const rootReducer = combineReducers({ tasks, filters, users });

export default rootReducer;
