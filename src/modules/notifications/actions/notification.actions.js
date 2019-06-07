import {SET_HANDLE_NOTIFICATION} from '../types/types';
import axios from 'axios';
import {CONFIGHEADERS} from '../../constants/constants';

export const handleNotifications = (data) =>  dispatch => {
    axios.post('http://localhost:8088/api/login', data, CONFIGHEADERS)
        .then((res) => {
            return dispatch({
                type: SET_HANDLE_NOTIFICATION,
                resp: res.data
            })
        });
}