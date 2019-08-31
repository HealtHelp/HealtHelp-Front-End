import {SET_HANDLE_NOTIFICATION_LOGIN} from '../types/types';
import {ERROR_HANDLE_LOGIN,} from '../types/types';
import {SET_HANDLE_POST_USER_ERROR} from '../types/types';

const initialState = {
    data:[],
    loginError:null,
    userPOST:null
}

export default function handleNotifications(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_NOTIFICATION_LOGIN:
            return{
                ...state,
            }
        case  ERROR_HANDLE_LOGIN:
                    return{
                        ...state,
                        loginError:true
                    }
        case SET_HANDLE_POST_USER_ERROR:  
                    return{
                        ...state,
                        userPOST:true
                    }             
        default:
            return state;    
    }
}