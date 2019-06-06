import React, { Component } from 'react';
import PrimarySearchAppBar from './modules/header/components/header.component';
import BottomAppBar from './modules/footer/components/footer.component';
import ScrollableTabsButtonForce from './modules/tab/components/tab.component';
import ImageAvatars from './modules/start/components/start.component';
import Clinic from './modules/clinic/components/clinic.component';
import Appointment from './modules/appointment/components/appointment.component';
import Services from './modules/services/components/services.component';
import Contact from './modules/login/components/login.component';
import Success from './modules/snackbars/components/success.component';
import Error from './modules/snackbars/components/error.component';
import {urlActuatorInfo} from './modules/constants/constants';
import {CONFIGHEADERS} from './modules/constants/constants';
import {TABSTART,TABCLINIC,TABSERVICES,TABAPPOINTMENT,TABCONTACT} from './modules/constants/constants';
import moment from 'moment';
import Home from './modules/home/components/home.component';




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
  //  this.props.setHandleTab(showNav);
  } 


  handleChangeTab = (value) =>{
    this.setState({
      showResourceTab:value,
      error:false,
      success:false
    })
  //  this.props.setHandleChangeTab(value) ;
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
   // this.props.setHandleActuator(data); 
  }

   render() {
    return (
      <div className="App">
      <PrimarySearchAppBar handleTab={this.handleTab}></PrimarySearchAppBar>
      {this.state.showNav  ? <ScrollableTabsButtonForce handleLogin={this.handleLogin} handleChangeTab={this.handleChangeTab} ></ScrollableTabsButtonForce> : ''}
      {Object.is(this.state.showResourceTab, TABSTART) ?  <ImageAvatars></ImageAvatars> : ''}
      {Object.is(this.state.showResourceTab, TABCLINIC) ? <Clinic></Clinic> : '' }
      {Object.is(this.state.showResourceTab, TABSERVICES) ? <Services></Services> : ''}
      {Object.is(this.state.showResourceTab, TABAPPOINTMENT) ? <Appointment></Appointment> :''}
      {Object.is(this.state.showResourceTab, TABCONTACT) ? <Contact handleLogin={this.handleLogin}></Contact> : ''}
      {!this.state.showResourceTab && this.state.showResourceTab !== 0 ? <ImageAvatars></ImageAvatars>:''}
      {this.state.success  ? <Home handleActuator={this.handleActuator}></Home>:''} 
      {this.state.error  ? <Error handleChangeTab={this.handleChangeTab}></Error>:''}
      {this.state.successMessage  ? <Success></Success>:''} 
      <BottomAppBar></BottomAppBar>
      </div>
    );
  } 
  
}



/* const mapDispatchToPropsActions = (dispatch) =>({
  setHandleTab: showNav => dispatch(setHandleTab(showNav)),
  setHandleChangeTab:value => dispatch(setHandleChangeTab(value)),
  setHandleLogin:data => dispatch(setHandleLogin(data)),
  setHandleActuator:data => dispatch(setHandleActuator(data))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;*/ 

export default App;

