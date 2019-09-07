import React from 'react';
import {connect} from 'react-redux';
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
        this.state = {
            handleIconPOST:null,
            handleIconPUT:null,
            disabled:true
        }
    }

    handleChange = () =>{ 
        console.log("state disabled: "+this.state.disabled)
        this.setState({disabled: this.handleTextFieldsValidator()})
      }

    handleTexFieldsValues = () =>{
        const patient = {
            id:0,
            user_id:localStorage.getItem("userId"),
            tenan_id:localStorage.getItem("tenantId"),
            patientName:document.getElementById("patientName").value,
            patientLastName:document.getElementById("patientLastName").value,
            patientDNI:document.getElementById("patientDNI").value,
            patientTelephone:document.getElementById("patientTelephone").value,
            patientLocation:document.getElementById("patientLocation").value,
            patientProfession:document.getElementById("patientProfession").value,
            patientEmail:document.getElementById("patientEmail").value
        }
        return patient;
    }

    handleTextFieldsValidator = () =>{
        const patient = this.handleTexFieldsValues();
        console.log(patient)
        if(patient.patientName && patient.patientLastName && patient.patientDNI && patient.patientTelephone && patient.patientLocation && patient.patientProfession && patient.patientDNI && patient.patientEmail){
            return false;
        }
        else{
            return true;
        }
    }

    handleDispatchPOST = (event) =>{
        event.preventDefault();
        const patient = this.handleTexFieldsValues();
        console.log(patient)
        const check = this.handleTextFieldsValidator();
        if(!check){
            console.log("storage");
        }
    }


    handlePOSTPatient = () => {
        console.log("handlePOSTPatient")
        
        this.setState({
            handleIconPOST:true,
            handleIconPUT:false
        })
    }

    handlePUTPatient = () => {
        console.log("handlePUTPatient")
        this.setState({
            handleIconPUT:true,
            handleIconPOST:false
        })    
    }

    handleDELETEPatient = () => {
        console.log("handleDELETEPatient")
    }

    render(){
        const classes = useStyles;
        return(
            <div className="Form">
            <form className={classes.container} noValidate  autoComplete="off" >
            {
                 (this.state.handleIconPOST || this.state.handleIconPUT)?

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
               id="patientAddress"
               //label="Username"
               placeholder="Address"
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
                :''}
              

             <div id="buttonsCRUD">
             
             {
                 this.state.handleIconPOST?

                    <div className="iconsPOST">
                      <button className="buttonUserComponent"  type="submit" onClick={this.handleDispatchPOST}  disabled={this.state.disabled}>
                        <i class="fas fa-save" ></i>
                    </button>
                    </div>
                :''    
             }
             
             {
                 this.state.handleIconPUT?
                 
                 <div className="iconsPUT">
                     <button className="buttonUserComponent" type="submit" onClick={this.handlePUTUser} disabled={this.state.disabled}>
                     <i class="fas fa-user-edit"></i>
                  </button>
                 </div>

                 :''
             }
            

             <div className="iconsCrud">  
                 <i class="fas fa-user-plus" onClick={this.handlePOSTPatient}></i>
                 <i class="fas fa-pen-alt" onClick={this.handlePUTPatient}></i>
                 <i class="fas fa-trash" onClick={this.handleDELETEPatient}></i>
             </div>

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