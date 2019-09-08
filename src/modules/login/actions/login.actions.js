import axios from 'axios';
import { SET_HANDLE_LOGIN } from '../types/types';
import {ERROR_HANDLE_LOGIN} from '../../notifications/types/types';
import {SET_HANDLE_LASTUSERID} from '../types/types';
import {ERROR_HANDLE_LASTUSERID } from '../../notifications/types/types';
import {SET_HANDLE_LASTPATIENTID} from '../types/types';
import {ERROR_HANDLE_LASTPATIENTID } from '../../notifications/types/types';
import { CONFIGHEADERS,URL_LOGIN,URL_LASTUSERID,URL_GET_LASTPATIENTID } from '../../constants/constants';

let token = localStorage.getItem("jwt");
const  HEADERS = {
    headers:{
        "Access-Control-Allow-Origin":"http://localhost:3000",
        "Authorization": token,
      }   
    }

export const handleLogin = (data) =>  dispatch => {
    console.log(URL_LOGIN) 
    axios.post(URL_LOGIN, data, CONFIGHEADERS)
        .then((res) => {
            localStorage.setItem("jwt",res.data);
            return dispatch({
                type: SET_HANDLE_LOGIN,
                resp: res.data
            })
        })
        .catch((err) =>{
            return dispatch({
                type: ERROR_HANDLE_LOGIN,
                error:true
            })
        })   
}

export const handleLastUserId = () =>  dispatch => {
    console.log(URL_LASTUSERID) 
    axios.get(URL_LASTUSERID, HEADERS)
        .then((res) => {
            console.log(res)
            localStorage.setItem("lastUserId",res.data.maxId);
            return dispatch({
                type: SET_HANDLE_LASTPATIENTID,
                resp: res.data
            })
        })
        .catch((err) =>{
            return dispatch({
                type: ERROR_HANDLE_LASTUSERID,
                error:true
            })
        })   
}


export const handleLastPatientId = () => dispatch => {
    console.log(URL_GET_LASTPATIENTID)
    axios.get(URL_GET_LASTPATIENTID, HEADERS) 
    .then((res) => {
        console.log(res)
        localStorage.setItem("lastPatientId",res.data.maxId);
        return dispatch({
            type: SET_HANDLE_LASTUSERID,
            resp: res.data
        })
    })
    .catch((err) =>{
        return dispatch({
            type: ERROR_HANDLE_LASTPATIENTID,
            error:true
        })
    })   
}











