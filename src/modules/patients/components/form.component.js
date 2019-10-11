import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import ErrorEmail from '../../snackbars/components/patients/errorEmail';
import ErrorDNI from '../../snackbars/components/patients/errorDNI';
import DataOk from '../../snackbars/components/dataOk.component';

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
            disabled:true,
            checkEmail:false,
            checkDNI:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTextFieldsValidator = this.handleTextFieldsValidator.bind(this);
        this.handleTexFieldsValues = this.handleTexFieldsValues.bind(this);
    }

   

    handleChange = () =>{ 
        console.log("handleCange "+this.state.disabled)
        this.setState({
            disabled: this.handleTextFieldsValidator(),
            checkEmail:false,
            checkDNI:false
        })
      }

    handleValidateEmail(email){
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      
    checkDNI(dni) {
        var number
        var letr
        var letter
        var regularExpresssion
        regularExpresssion = /^\d{8}[a-zA-Z]$/;
        if(regularExpresssion.test (dni) === true){
           number = dni.substr(0,dni.length-1);
           letr = dni.substr(dni.length-1,1);
           number = number % 23;
           letter='TRWAGMYFPDXBNJZSQVHLCKET';
           letter=letter.substring(number,number+1);
          if (letter!==letr.toUpperCase()) {
             //Dni erroneo, la letra del NIF no se corresponde
             this.setState({
                 checkDNI:true
             })
             return false;
           }else{
             //'Dni correcto'
             return true;
           }
        }else{
           //Dni erroneo, formato no válido
           this.setState({
            checkDNI:true
        })
           return false;
         }
      }  

    handleTexFieldsValues = () =>{
        let patientStoreId = localStorage.getItem("lastPatientId");
        const patientId = parseInt(patientStoreId)+1;
        const patient = {
            id:patientId,
            lopd:patientId,
            user_id:localStorage.getItem("userId"),
            tenan_id:localStorage.getItem("tenantId"),
            patientName:document.getElementById("patientName").value,
            patientLastName:document.getElementById("patientLastName").value,
            patientDNI:document.getElementById("patientDNI").value,
            patientAddress:document.getElementById("patientAddress").value,
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
        if(patient.patientName && patient.patientLastName && patient.patientDNI && patient.patientAddress && patient.patientTelephone && patient.patientLocation && patient.patientProfession && patient.patientDNI && patient.patientEmail){
            return false;
        }
        else{
            return true;
        }
    }

    cleanInputs = () =>{
        document.getElementById("patientName").value = "";
        document.getElementById("patientLastName").value = "";
        document.getElementById("patientDNI").value = "";
        document.getElementById("patientAddress").value = "";
        document.getElementById("patientTelephone").value = "";
        document.getElementById("patientLocation").value = "";
        document.getElementById("patientProfession").value = "";
        document.getElementById("patientEmail").value = "";
    }

    handleDispatchPOST = (event) =>{
        event.preventDefault();
        console.log("handleDispatchPOST")
        const patient = this.handleTexFieldsValues();
        this.cleanInputs();
        const checkEmail = this.handleValidateEmail(patient.patientEmail);
        const checkDNI = this.checkDNI(patient.patientDNI);
        console.log("checkDNI: "+checkDNI);
        console.log(patient);
        if(!checkEmail){
            this.setState({checkEmail:true})      
        }
        else{
            this.setState({checkEmail:false})
        }
        if(checkEmail && checkDNI){
            //store.dispatch(patient);
        } 
    }


    handlePOSTPatient = () => {
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
               label="Name"
               placeholder="Name"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientLastName"
               label="Last Name"
               placeholder="Last Name"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientDNI"
               label="DNI"
               placeholder="DNI"
               className={classes.textField}
               onChange={this.handleChange}
             />

             
              <TextField
               id="patientTelephone"
               label="Telephone"
               placeholder="Telephone"
               className={classes.textField}
               onChange={this.handleChange}
             />

             <TextField
               id="patientAddress"
               label="Address"
               placeholder="Address"
               className={classes.textField}
               onChange={this.handleChange}
             />
          


              <TextField
               id="patientLocation"
               label="Location"
               placeholder="Location"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientProfession"
               label="Profession"
               placeholder="Profession"
               className={classes.textField}
               onChange={this.handleChange}
             />

              <TextField
               id="patientEmail"
               label="Email"
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
            {this.state.checkEmail?<ErrorEmail></ErrorEmail>:''}
            {!this.state.disabled?<DataOk></DataOk>:''}
            {this.state.checkDNI?<ErrorDNI></ErrorDNI>:''}
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