import {SET_HANDLE_GET_USERS} from '../types/types';
import { SET_HANDLE_GET_USERS_ERROR } from '../../notifications/types/types';
import axios from 'axios';
import {URL_GET_USERS } from '../../constants/constants';



export const handleGetUsers = () =>  dispatch => {
    let token = localStorage.getItem("jwt");
    const  HEADERS_GET_USERS = {
        headers:{
            "Access-Control-Allow-Origin":"http://localhost:3000",
            "Authorization": token,
          }   
      }  
    axios.get(URL_GET_USERS,HEADERS_GET_USERS)
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