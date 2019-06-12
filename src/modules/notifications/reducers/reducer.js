import {SET_HANDLE_NOTIFICATION} from '../types/types';

const initialState = {
    data:[],
    success:null,
    successmessages:null
}

export default function handleNotifications(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_NOTIFICATION:
            return{
                ...state,
                success:true,
                successmessages:true
            }
        default:
            return state;    
    }
}