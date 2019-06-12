import {SET_HANDLE_LOGIN} from '../types/types';
import axios from 'axios';
import { CONFIGHEADERS,URL_LOGIN } from '../../constants/constants';
import { SET_HANDLE_ERROR } from '../../notifications/types/types';

export const handleLogin = (data) =>  dispatch => {
    axios.post(URL_LOGIN, data, CONFIGHEADERS)
        .then((res) => {
            return dispatch({
                type: SET_HANDLE_LOGIN,
                resp: res.data
            })
        })
        .catch((err) =>{
            return dispatch({
                type: SET_HANDLE_ERROR,
                error:true
            })
        })   
}