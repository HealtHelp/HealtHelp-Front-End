import { HANDLE_GET_PATIENTS_BY_NAME } from '../types/types';
import { ERROR_HANDLE_GET_PATIENTS_BY_NAME } from '../../notifications/types/types';

const initialState = {
    data:[],
    successGETPatientsByName:null  
}

export default function patientReducer(state = initialState,action){
    switch(action.type){
        case HANDLE_GET_PATIENTS_BY_NAME:
            return{
                ...state,
                data: action.resp,
                successGETPatientsByName:true    
            }

        case ERROR_HANDLE_GET_PATIENTS_BY_NAME:
            return{
                    ...state,
                    successGETPatientsByName:false   
                }    
        default:
            return state;    

        }
}