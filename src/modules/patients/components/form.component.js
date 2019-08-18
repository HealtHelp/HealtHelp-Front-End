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
        this.state = {
            handleIconPOST:null,
            handleIconPUT:null
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
                      <button className="buttonUserComponent"  type="submit" onClick={this.handlePOSTUser}  disabled={this.state.disabled}>
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