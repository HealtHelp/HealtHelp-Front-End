import {SET_HANDLE_GET_USERS} from '../types/types';
import {SET_HANDLE_GET_USERS_ERROR} from '../../notifications/types/types';

const initialState = {
    data:[]
}

export default function login(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_GET_USERS:
            return{
                ...state,
                data: action.resp
                
            }
        case  SET_HANDLE_GET_USERS_ERROR:
                    return{
                        ...state,
                        error:true
                    }       
        default:
            return state;    
    }
}