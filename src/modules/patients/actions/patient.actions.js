import axios from 'axios';
import { HANDLE_GET_PATIENTS_BY_NAME } from '../types/types';
import { ERROR_HANDLE_GET_PATIENTS_BY_NAME }  from '../../notifications/types/types';


import { HANDLE_GET_USERID_BY_EMAIL } from '../types/types';
import { ERROR_HANDLE_GET_USERID_BY_EMAIL } from '../../notifications/types/types';
import {URL_USERID_BY_EMAIL} from '../../constants/constants';

let token = localStorage.getItem("jwt");
const  HEADERS = {
    headers:{
        "Access-Control-Allow-Origin":"http://localhost:3000",
        "Authorization": token,
      }   
    }

    export const handleGetPatiensByName = (name) =>  dispatch => {
        let id = localStorage.getItem("userId")
        let URL = `http://localhost:3000/api/patient/name/${name}/userId/${id}`;
        console.log(URL)
        axios.get(URL,HEADERS)
        .then((res) => {
            return dispatch({
                type: HANDLE_GET_PATIENTS_BY_NAME,
                resp: res.data
            })
        })
        .catch((err) =>{
            return dispatch({
                type: ERROR_HANDLE_GET_PATIENTS_BY_NAME,
                error:true
        
            })
        })   
        
    }


    export const handleUserId = (email) => dispatch => {
        let URL = URL_USERID_BY_EMAIL+email;
        console.log(URL)
        axios.get(URL,HEADERS)
        .then((res) => {
            localStorage.setItem("userId",res.data.id);
            localStorage.setItem("tenantId",res.data.tenantId);
            localStorage.setItem("profileId",res.data.profileId)
            return dispatch({
                type: HANDLE_GET_USERID_BY_EMAIL,
                resp: res.data
            })
        })
        .catch((err) =>{
            return dispatch({
                type: ERROR_HANDLE_GET_USERID_BY_EMAIL,
                error:true
        
            })
        })   
    }
    