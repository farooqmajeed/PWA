import { combineReducers } from 'redux';
import Main from './Main';
import Auth from './Auth';

const RootReducer = combineReducers({
    Main,Auth
});

export default RootReducer;