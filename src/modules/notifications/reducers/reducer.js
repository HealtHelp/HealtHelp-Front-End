import {SET_HANDLE_NOTIFICATION_LOGIN} from '../types/types';
import {SET_HANDLE_ERROR} from '../types/types';

const initialState = {
    data:[],
    success:null,
    error:null
}

export default function handleNotifications(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_NOTIFICATION_LOGIN:
            return{
                ...state,
                success:true
            }
        case  SET_HANDLE_ERROR:
                    return{
                        ...state,
                        error:true
                    }   
        default:
            return state;    
    }
}