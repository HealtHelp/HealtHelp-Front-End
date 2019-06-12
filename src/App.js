import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrimarySearchAppBar from './modules/header/components/header.component';
import BottomAppBar from './modules/footer/components/footer.component';
import ScrollableTabsButtonForce from './modules/tab/components/tab.component';
import Login from './modules/login/components/login.component';
import Start from './modules/start/components/start.component';
import Clinic from './modules/clinic/components/clinic.component';
import Appointment from './modules/appointment/components/appointment.component';
import Contact from './modules/login/components/login.component';
import Success from './modules/snackbars/components/success.component';
import Notification from './modules/notifications/components/notification.component';
import Error from './modules/snackbars/components/error.component';
import {urlActuatorInfo} from './modules/constants/constants';
import {CONFIGHEADERS} from './modules/constants/constants';
import moment from 'moment';
import Home from './modules/home/components/home.component';
import SuccessSnackbars from './modules/notifications/components/notification.component';
import ClinicPage from "./pages/Clinic"
import ServicesPage from './pages/Services';
import AppointmentPage from './pages/Appointment';
import ContactPage from './pages/Contact';
import LoginPage from './pages/Login';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      showResourceTab:-1,
      successMessage:null,
      success:null,
      error:null,
      closeLogin:null
    }
  }
  
  handleTab = (showNav) =>{
    this.setState({showNav:showNav})
  } 


  handleChangeTab = (value) =>{
    this.setState({
      showResourceTab:value,
      error:false,
      success:false
    })
  }


 
  

  handleActuator = (data) =>{
    let now = moment().format('YYYY-MM-DD');
    console.log("Call APIRest HealtHelp: "+now+" handleActuator "+data);
  
    const axios = require('axios'); 
    axios.get(urlActuatorInfo,data,CONFIGHEADERS)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

   render() {
    return (
      <Router>
      <div className="App">
      <PrimarySearchAppBar handleTab={this.handleTab}></PrimarySearchAppBar>
      <Notification></Notification>
      <SuccessSnackbars></SuccessSnackbars>
      {this.state.showNav  ? <ScrollableTabsButtonForce  handleChangeTab={this.handleChangeTab} ></ScrollableTabsButtonForce> : ''}
      
      
 
      
        <Route path="/" component={LoginPage} />
        <Route path="/clinic" component={ClinicPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/appointment" component={AppointmentPage} />
        <Route path="/contact" component={ContactPage} />
       

     
      


     {/*   {this.state.showNav  ? <ScrollableTabsButtonForce handleLogin={this.handleLogin} handleChangeTab={this.handleChangeTab} ></ScrollableTabsButtonForce> : ''}
      {Object.is(this.state.showResourceTab, TABSTART) ?  <ImageAvatars></ImageAvatars> : ''}
      {Object.is(this.state.showResourceTab, TABCLINIC) ? <Clinic></Clinic> : '' }
      {Object.is(this.state.showResourceTab, TABSERVICES) ? <Services></Services> : ''}
      {Object.is(this.state.showResourceTab, TABAPPOINTMENT) ? <Appointment></Appointment> :''}
      {Object.is(this.state.showResourceTab, TABCONTACT) ? <Contact handleLogin={this.handleLogin}></Contact> : ''}
      {Object.is(this.state.showResourceTab, TABLOGIN) ? <Login handleLogin={this.handleLogin}></Login> : ''}
      {!this.state.showResourceTab && this.state.showResourceTab !== 0 ? <ImageAvatars></ImageAvatars>:''}
      {this.state.success  ? <Home handleActuator={this.handleActuator}></Home>:''} 
      {this.state.error  ? <Error handleChangeTab={this.handleChangeTab}></Error>:''}
      {this.state.successMessage  ? <Success></Success>:''}   */}
      <BottomAppBar></BottomAppBar>
      </div>
       </Router> 
    );
  } 
  
}





export default App;

