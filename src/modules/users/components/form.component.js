import React from 'react';
import {connect} from 'react-redux';
import store from '../../../store/store';
import {handleGetUsers, handlePostUser,handlePutUser,handleDeleteUser} from '../actions/user.actions';
import TextField from '@material-ui/core/TextField';
import Warning from '../../snackbars/components/warning.component';
import DataOk from '../../snackbars/components/dataOk.component';
const crypto = require('crypto');

const useStyles = {
    root: {
        width: '100%',
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
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
          data:[],
          handleCreateUser:false,
          handleIconsPOST:false,
          handleIconsPUT:false,
          warning:false,
          disabled:true,
          successGET:false,
          dataOk:false
        }
        this.rows = [];
       };


       handleChange = () =>{ 
        this.setState({disabled: this.handleDisabled()})
      }
      
      handleDisabled = () =>{
        const id = this.props.handleId;
        const user = this.inputsValues();
        if(user.username && user.email && user.profileName && user.tenantName && user.password && user.repitpassword && (id != null || user.id != null)){
          this.setState({dataOk:true})
          return false;
         
        }
        else{
          this.setState({dataOk:false})
          return true;
         
        }
      }


     cleanInputs = () => {
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      document.getElementById("profile").value = "";
      document.getElementById("tenant").value = "";
     } 
    
     inputsValues = () => {
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let repitpassword = document.getElementById("repitpassword").value;
      let profileName = document.getElementById("profile").value;
      let tenantName = document.getElementById("tenant").value;
      const user = {
        id:2,
        username:username,
        email:email,
        password:password,
        repitpassword:repitpassword,
        profileName:profileName,
        tenantName:tenantName
      }
      return user;
     }
    
      handleNewUser = () =>{
        this.cleanInputs();
        this.setState({
          handleCreateUser:true,
          handleIconsPUT:false
        });
        {this.state.handleIconsPOST?this.setState({handleIconsPOST:false}): this.setState({handleIconsPOST:true})}
      }


      
      handleCreateUser = () => { 
        {this.state.handleCreateUser?this.setState({handleCreateUser:false}):this.setState({handleCreateUser:true});}
      }
    
      handleUpdateUser = () => {
        this.setState({
          handleIconsPUT:true,
          handleIconsPOST:false,
          handleCreateUser:true
        })
       {this.state.handleIconsPUT?this.setState({handleIconsPUT:false}):this.setState({handleIconsPUT:true});} 
      }
 
      
      validateEmail(email){
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }


   
      checkProfile = (profile) =>{
        if(profile === "ADMIN"){
          profile = 1;
         }
        else if(profile === "USER"){
          profile = 2;
        }
        else{
          profile = 0;
        }
        return profile; 
       }
       
       checkTenant = (tenant) =>{
         if(tenant === "Roberto del Barrio Pizarro"){
           tenant = 1;
         }
         else{
           tenant = 0;
         }
         return tenant;
       }
 



       handlePOSTUser = (event) => { 
        event.preventDefault();
        this.setState(function(){
          return {
             warning: false
          } 
        },  () => {
          //after callback
          const user = this.inputsValues();  
          let email = user.email;
          const check = this.validateEmail(email);
          if((user.password !== user.repitpassword) || !check){
            this.setState({warning:true});
          }
          else{
            const user = this.inputsValues(); 
            const profile = this.checkProfile(user.profileName);
            const tenant =  this.checkTenant(user.tenantName);
            const id = Math.floor(Math.random() * 100000) + 1  
            const userValues = {
              id:id,
              username: user.username,
              email: email,
              profileId: profile,
              tenantId: tenant,
              password: user.password
            }
            this.handleDispatchPOST(userValues)
            this.cleanInputs();
            document.getElementById("password").value="";
            document.getElementById("repitpassword").value="";
            }
        });
      }


      handlePUTUser = (event) => {
        event.preventDefault();
        this.setState(function(){
          return {
             warning: false
          } 
        },  () => {
          //after callback
          const user = this.inputsValues();  
          let email = user.email;
          const check = this.validateEmail(email);
          if((user.password !== user.repitpassword) || !check){
            this.setState({warning:true});
          }
          else{
            const user = this.inputsValues(); 
            const profile = this.checkProfile(user.profileName);
            const tenant =  this.checkTenant(user.tenantName);
            const id = this.props.handleId;
            const userValues = {
              id:id,
              username: user.username,
              email: email,
              profileId: profile,
              tenantId: tenant,
              password: user.password
            }
            this.handleDispatchPUT(userValues)
            this.cleanInputs();
            document.getElementById("password").value="";
            document.getElementById("repitpassword").value="";
            }
        });
      }


      handleDeletedUser = (event) => {
        event.preventDefault();
        const userId = this.props.handleId;
        this.handleDispatchDELETE(userId);
        this.cleanInputs();
      }

      UUIDGeneratorNode = () =>
      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
      );


      handleDispatchPOST = (user) => {       
        let promise = new Promise(function(resolve){
          resolve(store.dispatch(handlePostUser(user)))
        });
        promise.then(
          store.dispatch(handleGetUsers())
        );
        this.props.successPOST(false); 

     }

     handleDispatchPUT = (user) => {
      let promise = new Promise(function(resolve){
        resolve(store.dispatch(handlePutUser(user)))
      });
      promise.then(
        store.dispatch(handleGetUsers())
      );
      this.props.successPUT(true); 
    
     }

        
     handleDispatchGET = (event) => {
        event.preventDefault();
        let promise = new Promise(function(resolve){
          resolve(store.dispatch(handleGetUsers()))
        });
        promise.then(
            this.props.successPUT(false),
            this.props.successDELETE(false),     
        );
      
       }

       handleDispatchDELETE = (userId) => {
         let promise = new Promise(function(resolve){
          resolve(store.dispatch(handleDeleteUser(userId)))
        });
        promise.then(
            this.props.successDELETE(true),
            this.props.successPUT(false)
        );
        
       }


      

    render(){
        const classes = useStyles;
        console.log(this.state.handleIconsPOST) 
        return(
          <div className="Form">
         <form className={classes.container} noValidate  autoComplete="off" onSubmit={this.handlePOSTUser}>
            <div id="textFields">
           <TextField
            id="username"
            //label="Username"
            placeholder="Username"
            className={classes.textField}
            onChange={this.handleChange}
          />
           <TextField
            id="email"
            //label="Email"
            placeholder="Email"
            className={classes.textField}
            onChange={this.handleChange}
          />
          <TextField
            id="profile"
            //label="Profile"
            placeholder="Profile"
            className={classes.textField}
            onChange={this.handleChange}
          />
           <TextField
            id="tenant"
            //label="Tenant"
            placeholder="Tenant"
            className={classes.textField}
            onChange={this.handleChange}
          />
        {this.state.handleCreateUser?
         <div id="textFieldsPassword">
         <TextField
            id="password"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            onChange={this.handleChange}
          /> <br></br>
           <TextField
            id="repitpassword"
            label="Repit Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            onChange={this.handleChange}
          /> 
         </div> 
         : ''
      }
     </div> 
        
        {this.state.handleIconsPOST?
        <div className="iconsPOST">
          <button className="buttonUserComponent"  type="submit" onClick={this.handlePOSTUser}  disabled={this.state.disabled}><i class="fas fa-save" ></i></button>
        </div>
        : ''
        } 

        {this.state.handleIconsPUT?
        <div className="iconsPUT">
          <button className="buttonUserComponent" type="submit" onClick={this.handlePUTUser} disabled={this.state.disabled}><i class="fas fa-user-edit"></i></button>
        </div>
        : ''
        } 
           
          <div className="iconsCrud">
            <i class="fas fa-unlock-alt"  onClick={this.handleCreateUser}></i>   
            <i class="fas fa-user-plus" onClick={this.handleNewUser}></i>
            <i class="fas fa-pen-alt" onClick={this.handleUpdateUser}></i>
            <i class="fas fa-trash" onClick={this.handleDeletedUser}></i>
          </div>


          <div className="iconsCrud">
             <i class="fas fa-users" onClick={this.handleDispatchGET}></i>
          </div>
          </form>
       
                 {this.state.warning?<Warning></Warning>:''} 
                 {this.state.dataOk?<DataOk></DataOk>:''}
          </div>         
          
        );
    }
}


const mapStateToProps = (state) =>{
    return {
     data:state.users
 }
 }

export default connect(mapStateToProps,null)(FormComponent);
