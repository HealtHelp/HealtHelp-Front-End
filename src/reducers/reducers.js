import {combineReducers} from 'redux';
import loginReducer from '../modules/login/reducers/reducer';
import notificationReducer from '../modules/notifications/reducers/reducer';
import userReducer from '../modules/users/reducers/reducer';

export default combineReducers({
    auth :loginReducer,
    notification: notificationReducer,
    getUsers: userReducer
});