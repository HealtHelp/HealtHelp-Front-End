import {SET_HANDLE_GET_USERS} from '../types/types';
import { SET_HANDLE_GET_USERS_ERROR } from '../../notifications/types/types';
import axios from 'axios';
import {URL_GET_USERS } from '../../constants/constants';
import store from '../../../store/store';
import {CONFIGHEADERS} from '../../constants/constants';



export const handleGetUsers = (data) =>  dispatch => {
    
   /*  axios.interceptors.request.use(function (config) {
        const token = store.getState().auth.token;
        config.headers.Authorization =  token;
        return config;
    });
 */
    /* let token = store.getState().auth.token;
    axios.defaults.headers.common['Authorization'] = token;
    console.log(axios.defaults.headers.common['Authorization']) */

    const HEADERS = {
        headers:{
            "Access-Control-Allow-Origin":"http://localhost:3000/user",
            "Authorization": store.getState().auth.token,
            "Content-Type": "application/json",
            "Accept":"*/*"
          }   
    }
    
    console.log(HEADERS.headers)
    axios.post(URL_GET_USERS,data,HEADERS)
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