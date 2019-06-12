import React, { Component } from 'react';
import store from './store/store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './modules/header/components/header.component';
import Footer from './modules/footer/components/footer.component';
import ScrollableTabsButtonForce from './modules/tab/components/tab.component';
import Notification from './modules/notifications/components/notification.component';
import {urlActuatorInfo} from './modules/constants/constants';
import {CONFIGHEADERS} from './modules/constants/constants';
import moment from 'moment';
import ClinicPage from "./pages/Clinic"
import ServicesPage from './pages/Services';
import AppointmentPage from './pages/Appointment';
import ContactPage from './pages/Contact';
import LoginPage from './pages/Login';
import StartPage from './pages/Start';
import Success from './modules/snackbars/components/success.component';
import Error from './modules/snackbars/components/error.component';
import Home from './modules/home/components/home.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      showResourceTab:-1,
    }

    store.subscribe(() => {
      this.setState({
        success : store.getState().notification.success,
        error: store.getState().notification.error
      
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
      <Header handleTab={this.handleTab}></Header>
      <Notification></Notification>
      {this.state.showNav  ? <ScrollableTabsButtonForce  handleChangeTab={this.handleChangeTab} ></ScrollableTabsButtonForce> : ''}
      {this.state.success ? <Success></Success>:''}
      {this.state.success ? <Home handleActuator={this.handleActuator}></Home>:''}
      {this.state.error ? <Error></Error>:''}
       
 
      
        <Route path="/" component={LoginPage} />
        <Route path="/start" component={StartPage} />
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
      <Footer></Footer>
      </div>
       </Router> 
    );
  } 
  
}





export default App;

