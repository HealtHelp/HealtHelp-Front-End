import React, { Component } from 'react';
import store from './store/store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import Header from './modules/header/components/header.component';
import Footer from './modules/footer/components/footer.component';
import Notification from './modules/notifications/components/notification.component';
import ClinicPage from "./pages/Clinic"
import ServicesPage from './pages/Services';
import AppointmentPage from './pages/Appointment';
import ContactPage from './pages/Contact';
import LoginPage from './pages/Login';
import StartPage from './pages/Start';
import HomePage from './pages/Home';
import UserPage from './pages/User';
import Success from './modules/snackbars/components/success.component';
import Error from './modules/snackbars/components/error.component';
import Home from './modules/home/components/home.component';
import {URL_GET_USERS } from './modules/constants/constants';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      showResourceTab:-1,
      showLogin:null,
      error:false
    }

    store.subscribe(() => {
      this.setState({
        success : store.getState().auth.success,
        error: store.getState().notification.loginError
      });
       
    });
  }

  handleTab = (showNav) =>{
    this.setState({showNav:showNav})
  } 


  handleChangeTab = (value) =>{
    this.setState({
      showResourceTab:value
    })
  }

  handleLogin = (open) =>{
    this.setState({
      showLogin:open,
      error:false
    })
  }
  
  
/* handletest = () =>{
  let token = localStorage.getItem("jwt");
 
   
     const CONFIGHEADERS ={
       headers:{
        "Access-Control-Allow-Origin":"http://localhost:3000",
        "Authorization":token
       }
      }  
      
    

  console.log(token)
  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin","http://localhost:3000");
  myHeaders.append("Authorization",token);
  myHeaders.append("Content-Type","application/json");
 

  const myInit = {
		method: 'GET',
    mode: 'no-cors',
    headers:CONFIGHEADERS
  };
  
  console.log(myHeaders.get("Authorization"))
  const myRequest = new Request(URL_GET_USERS,myInit);
 console.log(myInit)
 console.log(myRequest)

 axios.get(URL_GET_USERS,CONFIGHEADERS)
 .then((res) => {
  return console.log(res)
})
.catch((err) =>{
  console.log("ERROR:  "+err)
})  
 


}*/
 




   
  
   render() { 
    return (
      <Router>
      <div className="App">
      <Header handleTab={this.handleTab}></Header>
      <Notification></Notification>
      {(this.state.showNav && this.state.success )  ? <Home></Home> : ''} 
      {this.state.success ? <Success></Success>:''}
      {this.state.success ? <HomePage></HomePage>:''} 
      {this.state.showLogin ? <LoginPage></LoginPage>:''} 
      {this.state.error ? <Error handleLogin={this.handleLogin}></Error>:''}
         
        <Route path="/" component={LoginPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/start" component={StartPage} />
        <Route path="/clinic" component={ClinicPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/appointment" component={AppointmentPage} />
        <Route path="/contact" component={ContactPage} />

      <Footer></Footer>
      </div>
       </Router> 
    );
  } 
  
}

export default App;

