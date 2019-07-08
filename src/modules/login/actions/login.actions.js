import axios from 'axios';
import { SET_HANDLE_LOGIN } from '../types/types';
import { SET_HANDLE_LOGIN_ERROR } from '../../notifications/types/types';
import { CONFIGHEADERS,URL_LOGIN } from '../../constants/constants';


export const handleLogin = (data) =>  dispatch => {
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
                type: SET_HANDLE_LOGIN_ERROR,
                error:true
            })
        })   
}