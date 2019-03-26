import React, { Component } from 'react';
import {connect} from 'react-redux';
import PrimarySearchAppBar from './modules/header/components/header.component';
import BottomAppBar from './modules/footer/components/footer.component';
import ScrollableTabsButtonForce from './modules/tab/components/tab.component';
import ImageAvatars from './modules/start/components/start.component';
import Clinic from './modules/clinic/components/clinic.component';
import IntegrationAutosuggest from './modules/appointment/components/appointment.component';
import TextMobileStepper from './modules/services/components/services.component';
import FormDialog from './modules/login/components/login.component';
import {setHandleChangeTab} from './modules/tab/actions';
import {setHandleTab} from './modules/header/actions';
import {setHandleLogin} from './modules/login/actions';
import {setHandleActuator} from './modules/actuator/actions';
import Success from './modules/snackbars/components/success.component';
import Error from './modules/snackbars/components/error.component';
import {urlLogin} from './modules/constants/constants';
import {urlActuatorInfo} from './modules/constants/constants';
import moment from 'moment';
import Home from './modules/home/components/home.component';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      showResource:null,
      successMessage:null,
      success:null,
      error:null,
      closeLogin:null
    }
  }
  
  handleTab = (showNav) =>{
    this.setState({showNav:showNav})
    this.props.setHandleTab(showNav);
  }

  handleChangeTab = (value) =>{
    this.setState({
      showResource:value,
      error:false,
      success:false
    })
    this.props.setHandleChangeTab(value) ;
  }


  handleLogin = (data) =>{
    this.setState({
      success:false,
      successMessage:false
    })
    let now = moment().format('YYYY-MM-DD');
    console.log("Call APIRest HealtHelp:"+now+" "+data.username);
    //CORS
    const config={
      headers:{
        "Access-Control-Allow-Origin":"http://localhost:3000"
      }
    }
    const value = {
      username:data.username,
      password:data.password
    }
  
      const axios = require('axios'); 
      axios.post(urlLogin,value,config)
      .then(response => {
        console.log(response);
        this.setState({
          success:true,
          showNav:false,
          successMessage:true
        })
        })
        .catch(error => {
        console.log(error);
        this.setState({
          error:true
        })
        });
      this.props.setHandleLogin(data); 
  }

  handleActuator = (data) =>{
    let now = moment().format('YYYY-MM-DD');
    console.log("Call APIRest HealtHelp:"+now);
    //CORS

    const config = {
      headers:{
        "Access-Control-Allow-Origin":"http://localhost:3000"
      }
    }
    const axios = require('axios'); 
    axios.get(urlActuatorInfo,data,config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.setHandleActuator(data); 
  }
  render() {
    return (
      
      <div className="App">
      <PrimarySearchAppBar handleTab={this.handleTab}></PrimarySearchAppBar>
      {this.state.showNav  ? <ScrollableTabsButtonForce handleLogin={this.handleLogin} handleChangeTab={this.handleChangeTab} ></ScrollableTabsButtonForce> : ''}
      
      {Object.is(this.state.showResource, 0) ?  <ImageAvatars></ImageAvatars> : ''}
      {Object.is(this.state.showResource, 1) ? <Clinic></Clinic> : ''}
      {Object.is(this.state.showResource, 2) ? <TextMobileStepper></TextMobileStepper> : ''}
      {Object.is(this.state.showResource, 3) ? <IntegrationAutosuggest></IntegrationAutosuggest> : ''}
      {Object.is(this.state.showResource, 5) ? <FormDialog handleLogin={this.handleLogin}></FormDialog> : ''}
      
       
      {!this.state.showResource && this.state.showResource !== 0 ? <ImageAvatars></ImageAvatars>:''}
      {this.state.success  ? <Home handleActuator={this.handleActuator}></Home>:''} 
      {this.state.error  ? <Error handleChangeTab={this.handleChangeTab}></Error>:''}
      {this.state.successMessage  ? <Success></Success>:''} 
      <BottomAppBar></BottomAppBar>
      
      </div>
    );
  }
}



const mapDispatchToPropsActions = (dispatch) =>({
  setHandleTab: showNav => dispatch(setHandleTab(showNav)),
  setHandleChangeTab:value => dispatch(setHandleChangeTab(value)),
  setHandleLogin:data => dispatch(setHandleLogin(data)),
  setHandleActuator:data => dispatch(setHandleActuator(data))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
