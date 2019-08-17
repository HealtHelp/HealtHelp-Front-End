
//Login
export const URL_LOGIN = `http://localhost:3000/login/`;
//User
export const URL_GET_USERS = `http://localhost:3000/api/users`;
export const URL_POST_USER = `http://localhost:3000/api/user`;
export const URL_PUT_USER = `http://localhost:3000/api/user`;
export const URL_DELETE_USER = `http://localhost:3000/api/user/`;
//Patient
export const URL_GET_PATIENTS_BY_NAME = `http://localhost:3000/api/patient/name/`


//Actuator
export const urlActuatorInfo = `http://localhost:3000/actuator/info`;
export const CONFIGHEADERS = {
    headers:{
      "Access-Control-Allow-Origin":"http://localhost:3000"
    }   
  }

export const handleUserId = () =>{
  const email = localStorage.getItem("email");
  console.log(email);
}