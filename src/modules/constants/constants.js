import store from '../../store/store';
export const APIKEY = 'AIzaSyDqyFTY_ZXXxEXJxEpXmKQ6jPSs3GKF5qw';
export const URL_LOGIN = `http://localhost:3000/login/`;
export const URL_GET_USERS = `http://localhost:3000/api/users`;
export const urlActuatorInfo = `http://localhost:3000/actuator/info`;
export const CONFIGHEADERS = {
    headers:{
      "Access-Control-Allow-Origin":"http://localhost:3000"
    }   
  }

export const  HEADERS_GET_USERS = {
  headers:{
      "Access-Control-Allow-Origin":"http://localhost:3000",
      "Authorization": store.getState().auth.token,
    }   
}  
