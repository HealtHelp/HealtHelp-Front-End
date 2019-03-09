import React, { Component } from 'react';
import {store} from './modules/store/store';
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



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      showResource:null,
     
    }
  }

  handleTab = (showNav) =>{
    this.setState({showNav:showNav})
    store.dispatch(setHandleTab(showNav));
  }

  handleChangeTab = (value) =>{
    this.setState({showResource:value})
    store.dispatch(setHandleChangeTab(value));
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

export default App;
