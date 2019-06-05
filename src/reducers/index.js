import { combineReducers, createStore } from 'redux';

import counterReducer from './CounterReducer';
import loginReducer from './LoginReducer';

const AppReducers = combineReducers({
    counterReducer, loginReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;