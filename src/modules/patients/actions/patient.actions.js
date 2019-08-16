import axios from 'axios';
import { HANDLE_GET_PATIENTS_BY_NAME } from '../types/types';
import { ERROR_HANDLE_GET_PATIENTS_BY_NAME }  from '../../notifications/types/types';
import { URL_GET_PATIENTS_BY_NAME } from '../../constants/constants';

let token = localStorage.getItem("jwt");
const  HEADERS = {
    headers:{
        "Access-Control-Allow-Origin":"http://localhost:3000",
        "Authorization": token,
      }   
    }



    export const handleGetPatiensByName = (name) =>  dispatch => {
        let URL = URL_GET_PATIENTS_BY_NAME+name;
        console.log(URL)
        axios.get(URL,HEADERS)
        .then((res) => {
            console.log(res)
            return dispatch({
                type: HANDLE_GET_PATIENTS_BY_NAME,
                resp: res.data
            })
        })
        .catch((err) =>{
            console.log(err)
            return dispatch({
                type: ERROR_HANDLE_GET_PATIENTS_BY_NAME,
                error:true
            })
        })   
        
    }
    