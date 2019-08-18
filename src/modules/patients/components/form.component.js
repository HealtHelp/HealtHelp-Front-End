import React from 'react';
import {connect} from 'react-redux';
import store from '../../../store/store';
import TextField from '@material-ui/core/TextField';


const useStyles = {
  
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
       textField: {
        width: 200
      }  
}

class FormComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const classes = useStyles;
        return(
            <div className="Form">
            <form className={classes.container} noValidate  autoComplete="off" >
             <div id="textFields">
              <TextField
               id="patientName"
               //label="Username"
               placeholder="Name"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientLastName"
               //label="Username"
               placeholder="Last Name"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientDNI"
               //label="Username"
               placeholder="DNI"
               className={classes.textField}
               onChange={this.handleChange}
             />

             
              <TextField
               id="patientTelephone"
               //label="Username"
               placeholder="Telephone"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientLocation"
               //label="Username"
               placeholder="Location"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientProfession"
               //label="Username"
               placeholder="Profession"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientEmail"
               //label="Username"
               placeholder="Email"
               className={classes.textField}
               onChange={this.handleChange}
             />
             </div> 
             </form>
            </div> 
        );

    }
} 



const mapStateToProps = (state) =>{
    return {
     data:state.patients
 }
 }

export default connect(mapStateToProps,null)(FormComponent);