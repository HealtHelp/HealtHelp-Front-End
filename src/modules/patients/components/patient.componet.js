import React,{Component} from 'react';
import {connect} from 'react-redux';
import store from '../../../store/store';
import Search from '../components/search.component';
import TablePatient from '../components/table.component';
import { handleGetPatiensByName } from '../actions/patient.actions';
import axios from 'axios';

class Patient extends Component{
  constructor(props){
    super(props);
    this.state = {
      handleGetPatientByName:null
    }
  };

  handleSearch = (search) => {
    console.log(search);

   let promise = new Promise(function(resolve){
      resolve(
        store.dispatch(handleGetPatiensByName(search))
      )
    });
    promise.then(
        this.setState({
          handleGetPatientByName:true
        })
    );  
  }




render(){
  return(
    <div>
     <Search handleSearch={this.handleSearch}></Search>
     <TablePatient></TablePatient>
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