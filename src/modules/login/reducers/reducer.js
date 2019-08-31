import {SET_HANDLE_LOGIN} from '../types/types';
import {SET_HANDLE_LASTUSERID} from '../types/types';

const initialState = {
    data:[],
    token: null,
    success:false,
    successLastUserId:false,
    maxUserId:null
}

export default function login(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_LOGIN:
            return{
                ...state,
                token: action.resp,
                success:true
            }
        case SET_HANDLE_LASTUSERID:
                return{
                    ...state,
                    successLastUserId:true,
                    maxUserId:action.resp.maxUserId
                }    
        default:
            return state;    
    }
}