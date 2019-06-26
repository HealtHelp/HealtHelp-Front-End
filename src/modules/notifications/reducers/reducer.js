import {SET_HANDLE_NOTIFICATION_LOGIN} from '../types/types';
import {SET_HANDLE_LOGIN_ERROR} from '../types/types';

const initialState = {
    data:[],
}

export default function handleNotifications(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_NOTIFICATION_LOGIN:
            return{
                ...state
            }
        case  SET_HANDLE_LOGIN_ERROR:
                    return{
                        ...state
    
                    }   
        default:
            return state;    
    }
}