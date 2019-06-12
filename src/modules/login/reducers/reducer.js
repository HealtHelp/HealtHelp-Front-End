import {SET_HANDLE_LOGIN} from '../types/types';
import {SET_HANDLE_ERROR} from '../../notifications/types/types';

const initialState = {
    data:[],
    token: null
}

export default function login(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_LOGIN:
            return{
                ...state,
                token: action.resp
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