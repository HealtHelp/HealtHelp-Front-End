import React,{Component} from 'react';
import {connect} from 'react-redux';
import store from '../../../store/store';
import Search from '../components/search.component';
import TablePatient from '../components/table.component';
import FormComponent from '../components/form.component';
import { handleGetPatiensByName } from '../actions/patient.actions';
import { handleUserId } from '../actions/patient.actions';

class Patient extends Component{
  constructor(props){
    super(props);
    this.state = {
      handleGETPatientByName:null,
      handleGETUserIdByEmail:null,
    }
  };

  componentDidMount(){
    this.handleUserId()
  }


  handleUserId = () => {
    const email = localStorage.getItem("email");
    let promise = new Promise(function(resolve){
      resolve(
        store.dispatch(handleUserId(email))
      )
    })
    promise.then(
      this.setState({
        handleGETUserIdByEmail:true
      })
     )

 
  }


  handleSearch = (search) => {
   let promise = new Promise(function(resolve){
      resolve(
        store.dispatch(handleGetPatiensByName(search))
      )
    });
    promise.then(
      this.setState({
        handleGETPatientByName:true
      })
    );  
    this.handleTableAll();
  }


  handleTableAll = () =>{
    return true;
  }

 

render(){
  return(
    <div>
     <Search handleSearch={this.handleSearch} ></Search>
     <TablePatient handleTableAll={this.handleTableAll}></TablePatient>
     <FormComponent></FormComponent>
    </div>
    
  );
}
}


const mapStateToProps = (state) =>{
  return {
   data:state.patients
}
}

export default connect(mapStateToProps,null)(Patient);