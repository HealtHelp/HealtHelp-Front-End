import {SET_HANDLE_GET_USERS} from '../types/types';
import { SET_HANDLE_GET_USERS_ERROR } from '../../notifications/types/types';
import axios from 'axios';
import {URL_GET_USERS } from '../../constants/constants';


export const handleGetUsers = (HEADERS) =>  dispatch => {
    axios.post(URL_GET_USERS,HEADERS)
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