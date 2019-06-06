import {SET_HANDLE_LOGIN} from './types';

//cada reducer tiene su propio state
const initialState = {
    data:[],
    token: null
}

export default function login(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_LOGIN:
            return{
                ...state,
                token: action.resp[0]
            }
        default:
            return state;    
    }
}