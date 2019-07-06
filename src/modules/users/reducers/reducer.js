import {SET_HANDLE_GET_USERS} from '../types/types';
import {SET_HANDLE_GET_USERS_ERROR} from '../../notifications/types/types';
import {SET_HANDLE_POST_USER} from '../types/types';
import {SET_HANDLE_POST_USER_ERROR} from '../../notifications/types/types';
import {SET_HANDLE_PUT_USER} from '../types/types';
import {SET_HANDLE_PUT_USER_ERROR} from '../../notifications/types/types';
import {SET_HANDLE_DELETE_USER} from '../types/types';
import {SET_HANDLE_DELETE_USER_ERROR} from '../../notifications/types/types';

const initialState = {
    data:[],
    error:'',
    successPOST:null  
}

export default function userReducer(state = initialState,action){
    switch(action.type){
        case SET_HANDLE_GET_USERS:
            return{
                ...state,
                data: action.resp,
                error:false    
            }
        case  SET_HANDLE_GET_USERS_ERROR:
             return{
                ...state,
                 error:true
            }       
        case SET_HANDLE_POST_USER:
            return{
                ...state,
                data: action.resp,
                successPOST:true
            }
        case  SET_HANDLE_POST_USER_ERROR:
                    return{
                        ...state,
                        successPOST:false
                    }
        case  SET_HANDLE_PUT_USER:
                    return{
                        ...state,
                        data: action.resp,
                        
                    }
        case  SET_HANDLE_PUT_USER_ERROR:
                    return{
                        ...state,
                        error:true,
                        
                    }
        case SET_HANDLE_DELETE_USER:
                    return{
                        ...state,
                        
                    }
        case SET_HANDLE_DELETE_USER_ERROR:
                    return{
                        ...state,
                        error:true,
                       
                    }                                                     
        default:
            return state;    
    }
};


