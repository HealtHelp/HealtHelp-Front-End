import axios from 'axios';
import {SET_HANDLE_GET_USERS} from '../types/types';
import { SET_HANDLE_GET_USERS_ERROR } from '../../notifications/types/types';
import {URL_GET_USERS } from '../../constants/constants';
import {SET_HANDLE_POST_USER} from '../types/types';
import {SET_HANDLE_POST_USER_ERROR} from '../../notifications/types/types';
import {URL_POST_USER} from '../../constants/constants';
import {URL_PUT_USER} from '../../constants/constants';
import {SET_HANDLE_PUT_USER} from '../types/types';
import {SET_HANDLE_PUT_USER_ERROR} from '../../notifications/types/types';
import {SET_HANDLE_DELETE_USER} from '../types/types';
import {SET_HANDLE_DELETE_USER_ERROR} from '../../notifications/types/types';
import {URL_DELETE_USER} from '../../constants/constants';

let token = localStorage.getItem("jwt");
const  HEADERS = {
    headers:{
        "Access-Control-Allow-Origin":"http://localhost:3000",
        "Authorization": token,
      }   
    }

export const handleGetUsers = () =>  dispatch => {
    axios.get(URL_GET_USERS,HEADERS)
    .then((res) => {
        return dispatch({
            type: SET_HANDLE_GET_USERS,
            resp: res.data
        })
    })
    .catch((err) =>{
        return dispatch({
            type: SET_HANDLE_GET_USERS_ERROR,
            error:true
        })
    })   
    
}

export const handlePostUser = (user) =>  dispatch => {
    axios.post(URL_POST_USER,user,HEADERS)
    .then((res) => {
        return dispatch({
            type: SET_HANDLE_POST_USER,
            resp: res.data,
            error:false
        })
    })
    .catch((err) =>{
        return dispatch({
            type: SET_HANDLE_POST_USER_ERROR,
            error:true
        })
    })   
    
}


export const handlePutUser = (user) =>  dispatch => {
    axios.put(URL_PUT_USER,user,HEADERS)
    .then((res) => {
        return dispatch({
            type: SET_HANDLE_PUT_USER,
            resp: res.data,
            error: false
        })
    })
    .catch((err) =>{
        return dispatch({
            type: SET_HANDLE_PUT_USER_ERROR,
            error:true
        })
    })   
    
}


export const handleDeleteUser = (userId) => dispatch => {
    const URL = URL_DELETE_USER+userId;
    console.log(URL);
    axios.delete(URL,HEADERS)
    .then((res) => {
        return dispatch({
            type: SET_HANDLE_DELETE_USER,
            resp: res.data
        })
    })
    .catch((err) =>{
        return dispatch({
            type: SET_HANDLE_DELETE_USER_ERROR,
            error:true
        })
    })   
}