import {SET_HANDLE_LOGIN} from '../types/types';
import {SET_HANDLE_LOGIN_ERROR} from '../../notifications/types/types';

const initialState = {
    data:[],
    token: null,
    success:null
}

export default function login(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_LOGIN:
            return{
                ...state,
                token: action.resp,
                success:true
            }
        case  SET_HANDLE_LOGIN_ERROR:
                    return{
                        ...state,
                        error:true
                    }       
        default:
            return state;    
    }
}