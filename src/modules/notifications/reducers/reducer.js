import {SET_HANDLE_NOTIFICATION_LOGIN} from '../types/types';
import {SET_HANDLE_LOGIN_ERROR} from '../types/types';

const initialState = {
    data:[],
    loginSuccess:null,
    loginError:null
}

export default function handleNotifications(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_NOTIFICATION_LOGIN:
            return{
                ...state,
                loginSuccess:true
            }
        case  SET_HANDLE_LOGIN_ERROR:
                    return{
                        ...state,
                    loginError:true
    
                    }   
        default:
            return state;    
    }
}