import { combineReducers } from 'redux';

import userReducer from './userReducer';

import cryptoReducer from './cryptoReducer';



export default combineReducers({
    user: userReducer,
    crypto: cryptoReducer
});