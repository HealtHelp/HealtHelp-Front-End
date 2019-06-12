import {SET_HANDLE_NOTIFICATION} from '../types/types';
import axios from 'axios';
import {CONFIGHEADERS,URL_LOGIN} from '../../constants/constants';

export const handleNotifications = (data) =>  dispatch => {
    axios.post(URL_LOGIN, data, CONFIGHEADERS)
        .then((res) => {
            return dispatch({
                type: SET_HANDLE_NOTIFICATION,
                resp: res.data
            })
        });
}