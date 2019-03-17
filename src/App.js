import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
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
import moment from 'moment';

function testCallApi(){
    
  let now = moment().format('YYYY-MM-DD');
  console.log(`Call APIRest HealtHelp: ${now}`);
  const url = `http://localhost:8088/api/login/`;
  console.log(url)
    
  const config={
    headers:{
      "Access-Control-Allow-Origin":"http://localhost:3000",
      "Access-Control-Request-Method": "POST, GET, DELETE, PUT"
    }
  }
  
    const data = {
      username:"admin",
      password:"admin"
    }
   
    
    const axios = require('axios'); 
    axios.post(url,data,config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 

    /*fetch(url, {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:{
        username: 'admin', password: 'admin'
       }
    })*/
}


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      showResource:null,
     
    }
  }
  
  handleTab = (showNav) =>{
    testCallApi();
    this.setState({showNav:showNav})
    this.props.setHandleTab(showNav);
  }

  handleChangeTab = (value) =>{
    this.setState({showResource:value})
    this.props.setHandleChangeTab(value) ;
  }


  render() {
    return (
      
      <div className="App">
      <PrimarySearchAppBar handleTab={this.handleTab}></PrimarySearchAppBar>
      {this.state.showNav === true ? <ScrollableTabsButtonForce handleLogin={this.handleLogin} handleChangeTab={this.handleChangeTab}></ScrollableTabsButtonForce> : ''}
      {this.state.showResource === 0 ? <ImageAvatars></ImageAvatars>:''}
      {this.state.showResource === 1 ? <Clinic></Clinic> : ''}
      {this.state.showResource === 2 ? <TextMobileStepper></TextMobileStepper>:''}
      {this.state.showResource === 3 ? <IntegrationAutosuggest></IntegrationAutosuggest> : ''}
      {this.state.showResource === 5 ? <FormDialog></FormDialog> : ''} 
      {this.state.showResource === null && this.state.showResource !== 0 ? <ImageAvatars></ImageAvatars>:''}
      <BottomAppBar></BottomAppBar>
      
      </div>
    );
  }
}



const mapDispatchToPropsActions = (dispatch) =>({
  setHandleTab: showNav => dispatch(setHandleTab(showNav)),
  setHandleChangeTab:value => dispatch(setHandleChangeTab(value))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
