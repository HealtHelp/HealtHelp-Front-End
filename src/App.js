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
import Success from './modules/snackbars/components/sucess.component';
import moment from 'moment';




class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      showResource:null,
      success:null,
      error:null
    }
  }
  
  handleTab = (showNav) =>{
    this.setState({showNav:showNav})
    this.props.setHandleTab(showNav);
  }

  handleChangeTab = (value) =>{
    this.setState({showResource:value})
    this.props.setHandleChangeTab(value) ;
  }


  handleLogin = (data) =>{
    let now = moment().format('YYYY-MM-DD');
    console.log("Call APIRest HealtHelp:"+now+" "+data.email+" "+data.password);
    const url = `http://localhost:8088/api/login/`;

    const config={
      headers:{
        "Access-Control-Allow-Origin":"http://localhost:3000",
        "Access-Control-Request-Method": "POST, GET, DELETE, PUT"
      }
    }
    const value = {
      username:data.email,
      password:data.password
    }
  
      const axios = require('axios'); 
      axios.post(url,value,config)
      .then(response => {
        console.log(response);
        this.setState({
          success:true
        })
        })
        .catch(error => {
        console.log(error);
        });
      this.props.setHandleLogin(data); 
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
      {this.state.showResource === 5 ? <FormDialog handleLogin={this.handleLogin}></FormDialog> : ''} 
      {this.state.showResource === null && this.state.showResource !== 0 ? <ImageAvatars></ImageAvatars>:''}
      {this.state.success === true ? <Success></Success>:''}
      <BottomAppBar></BottomAppBar>
      
      </div>
    );
  }
}



const mapDispatchToPropsActions = (dispatch) =>({
  setHandleTab: showNav => dispatch(setHandleTab(showNav)),
  setHandleChangeTab:value => dispatch(setHandleChangeTab(value)),
  setHandleLogin:data => dispatch(setHandleLogin(data))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;
