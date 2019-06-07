
import {SET_HANDLE_LOGIN} from '../types/types';

import axios from 'axios';
import { CONFIGHEADERS } from '../../constants/constants';

export const handleLogin = (data) =>  dispatch => {
    axios.post('http://localhost:8088/api/login', data, CONFIGHEADERS)
        .then((res) => {
            return dispatch({
                type: SET_HANDLE_LOGIN,
                resp: res.data
            })
        });
    
}