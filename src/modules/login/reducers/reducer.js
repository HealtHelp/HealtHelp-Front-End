import {SET_HANDLE_LOGIN} from '../types/types';

const initialState = {
    data:[],
    token: null,
    success:false
}

export default function login(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_LOGIN:
            return{
                ...state,
                token: action.resp,
                success:true
            }
        default:
            return state;    
    }
}