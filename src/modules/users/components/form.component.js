import React from 'react';
import {connect} from 'react-redux';
import store from '../../../store/store';
import {handleGetUsers, handlePostUser} from '../actions/user.actions';
import TextField from '@material-ui/core/TextField';
import Warning from '../../snackbars/components/warning.component';

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
          successGET:false
        }
        this.rows = [];
       };


       handleChange = () =>{
        this.setState({disabled: this.handleDisabled()})
      }
      
      handleDisabled = () =>{
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let profile = document.getElementById("profile").value;
        let tenant = document.getElementById("tenant").value;
        let password = document.getElementById("password").value;
        let repitpassword = document.getElementById("repitpassword").value;
        if(username && email && profile && tenant && password && repitpassword ){
          return false;
        }
        else{
          return true;
        }
      }



    
    
      handleNewUser = () =>{
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("profile").value = "";
        document.getElementById("tenant").value = "";
        this.setState({
          handleCreateUser:true,
          handleIconsPUT:false
        });
        {this.state.handleIconsPOST?
          this.setState({
            handleIconsPOST:false,
          })
          : 
          this.setState({handleIconsPOST:true})
        }
      }
      
      handleCreateUser = () =>{ 
        {this.state.handleCreateUser?
          this.setState({handleCreateUser:false})
          :
          this.setState({handleCreateUser:true});
        }
      }
    
      handleUpdateUser = () =>{
        this.setState({
          handleIconsPUT:true,
          handleIconsPOST:false
        })
       {this.state.handleIconsPUT?
          this.setState({
            handleIconsPUT:false})
          :
          this.setState({handleIconsPUT:true});
        } 
      }
    
      handleUpdateUser(){
        alert("handleUpdateUser")
      }
    
      handleDeleteUser(){
        alert("handleDeleteUser")
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
          let username = document.getElementById("username").value;
          let email = document.getElementById("email").value;
          let password = document.getElementById("password").value;
          let repitpassword = document.getElementById("repitpassword").value;
          const check = this.validateEmail(email);
          if((password !== repitpassword) || !check){
            this.setState({warning:true});
          }
          else{
            let profileName = document.getElementById("profile").value;
            let tenantName = document.getElementById("tenant").value;
            const profile = this.checkProfile(profileName);
            const tenant =  this.checkTenant(tenantName);
            const id = Math.floor(Math.random() * 100) + 1  
            const user = {
              id:id,
              username:username,
              email:email,
              profileId:profile,
              tenantId:tenant,
              password:password
            }
            this.handleDispatchPOST(user)
            }
        });
      }


      handleDispatchPOST = (user) => {
        let promise = new Promise(function(resolve){
            console.log("resolve: handleDispatchPOST")
            resolve(store.dispatch(handlePostUser(user)))
          });
          promise.then(
            store.dispatch(handleGetUsers())
          );
          this.props.successPOST(true);   
     }


        
     handleGETUsers = (event) => {
        event.preventDefault();
        let promise = new Promise(function(resolve){
            console.log("resolve: handleGETUsers")
          resolve(store.dispatch(handleGetUsers()))
        });
        promise.then(
            this.setState({
              successGET:true
            })
        );
        this.props.successPOST(false);  
       }


       handlePUTUser(){
        alert("handlePUTUser")
      }

    render(){

        const classes = useStyles;

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
          <button className="buttonUserComponent"  type="submit"  disabled={this.state.disabled}><i class="fas fa-save" ></i></button>
        </div>
        : ''
        } 

        {this.state.handleIconsPUT?
        <div className="iconsPUT">
          <button className="buttonUserComponent" type="submit" onClick={this.handlePUTTUser} disabled={this.state.disabled}><i class="fas fa-user-edit" onClick={this.handlePUTUser}></i></button>
        </div>
        : ''
        } 
        
          
          <div className="iconsCrud">
            <i class="fas fa-unlock-alt"  onClick={this.handleCreateUser}></i>   
            <i class="fas fa-user-plus" onClick={this.handleNewUser}></i>
            <i class="fas fa-pen-alt" onClick={this.handleUpdateUser}></i>
            <i class="fas fa-trash" onClick={this.handleDeleteUser}></i>
          </div>
   
          </form>
       

          <div className="iconsCrud">
             <i class="fas fa-users" onClick={this.handleGETUsers}></i>
          </div>
                 {this.state.warning?<Warning></Warning>:''} 
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
