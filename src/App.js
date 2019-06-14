import React, { Component } from 'react';
import store from './store/store';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import Success from './modules/snackbars/components/success.component';
import Error from './modules/snackbars/components/error.component';
import Home from './modules/home/components/home.component';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showNav:false,
      showResourceTab:-1,
      showLogin:null
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

  handleLogin = (open) =>{
    this.setState({showLogin:open})
  }

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
        <Route path="/start" component={StartPage} />
        <Route path="/clinic" component={ClinicPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/appointment" component={AppointmentPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/home" component={HomePage} />
       

      
        
    

     {/*  

      
     
     {this.state.showNav  ? <ScrollableTabsButtonForce  handleChangeTab={this.handleChangeTab} ></ScrollableTabsButtonForce> : ''}
     
     {this.state.showNav  ? <ScrollableTabsButtonForce handleLogin={this.handleLogin} handleChangeTab={this.handleChangeTab} ></ScrollableTabsButtonForce> : ''}
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

