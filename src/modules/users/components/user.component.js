import React from 'react';
import {connect} from 'react-redux';
import store from '../../../store/store';
import {handleGetUsers} from '../actions/user.actions';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Warning from '../../snackbars/components/warning.component';



const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
      
    },

  },
}))(TableRow);



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



function createData(Id,Username,Email,Profile,Tenant) {
  return {Id, Username, Email, Profile, Tenant };
}


class UserTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],
      handleCreateUser:false,
      handleIconsPOST:false,
      handleIconsPUT:false,
      warning:false,
      disabled:true
    }

   };
   

  
  componentWillMount(){
    store.dispatch(handleGetUsers())
  }


  componentDidMount(){
    window.scrollTo(0, 0)
  }


  
  renderTable() {
    if(this.props.data.data.length === 0){
      return []
    }
      let users = this.props.data.data._embedded.userDToes;
      const rows = users.map((user) => createData(user.id,user.username,user.email,user.profile,user.tenant))
      return rows;
  }

  renderDimension(){
    let val;
    {window.screen.width <= 375?val=true:val=false}
    return val;
  }

 
 
  handleClickUsername(ex){
    let username = Object.values(ex.target)[1].children;
    document.getElementById("username").value = username;
  }

  handleClickEmail(ex){
    let email = Object.values(ex.target)[1].children;
    document.getElementById("email").value = email;
  }

  handleClickProfile(ex){
    let profile = Object.values(ex.target)[1].children;
   document.getElementById("profile").value = profile;
  }

  handleClickTenant(ex){
    let tenant = Object.values(ex.target)[1].children;
   document.getElementById("tenant").value = tenant; 
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
    {this.state.handleIconsPOST==true?
      this.setState({
        handleIconsPOST:false,
      })
      : 
      this.setState({handleIconsPOST:true})
    }
  }
  
  handleCreateUser = () =>{ 
    {this.state.handleCreateUser==true?
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
   {this.state.handleIconsPUT==true?
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
  

  handleChange = (e) =>{
    this.setState({disabled: this.handleDisabled()})
  }


  handleDisabled = () =>{
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let profile = document.getElementById("profile").value;
    let tenant = document.getElementById("tenant").value;
    let password = document.getElementById("password").value;
    let repitpassword = document.getElementById("repitpassword").value;
    console.log("Form: ",username , email , profile , tenant , password , repitpassword)
    if(username && email && profile && tenant && password && repitpassword ){
      return false;
    }
    else{
      return true;
    }
  }
  

   validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
 






  handlePOSTUser = () => {
    alert("post")

    this.setState(function(){
      return {
         warning: false
      }
    },  () => {
      //after callback
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let repitpassword = document.getElementById("repitpassword").value;
      const check = this.validateEmail(email);
      if((password !== repitpassword) || !check){
        this.setState({warning:true});
      }
    });
  }



  handlePUTUser(){
    alert("handlePUTUser")
  }



  render(){
    const dimension = this.renderDimension();
    const classes = useStyles;
    const rows = this.renderTable()
    
    return (
      <div className="tableUsers">
        {dimension==true?
           <Paper className={classes.root}>
           <Table className={classes.table}>
             <TableHead>
               <TableRow>
                 <StyledTableCell>Username</StyledTableCell>
                 <StyledTableCell align="right">Email</StyledTableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {rows.map(row => (
                 <StyledTableRow key={row.name}>
                   <StyledTableCell component="th" scope="row" id="usernameTable" onClick={this.handleClickUsername}>
                     {row.Username}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="emailTable" onClick={this.handleClickEmail}>
                      {row.Email}
                   </StyledTableCell>
                 </StyledTableRow>
               ))}
             </TableBody>
           </Table>
         </Paper> : 
           <Paper className={classes.root}>
           <Table className={classes.table}>
             <TableHead>
               <TableRow>
                 <StyledTableCell>Username</StyledTableCell>
                 <StyledTableCell align="right">Email</StyledTableCell>
                 <StyledTableCell align="right">Profile</StyledTableCell>
                 <StyledTableCell align="right">Tenant</StyledTableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {rows.map(row => (
                 <StyledTableRow key={row.name}>
                   <StyledTableCell  component="th" scope="row" id="usernameTable" onClick={this.handleClickUsername}>
                     {row.Username}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="emailTable" onClick={this.handleClickEmail}>
                   {row.Email}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="profileTable" onClick={this.handleClickProfile} >
                   {row.Profile}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="tenantTable" onClick={this.handleClickTenant}>
                   {row.Tenant}
                   </StyledTableCell>
                 </StyledTableRow>
               ))}
             </TableBody>
           </Table>
         </Paper>
        }

        

        
       
              
             <form className={classes.container} noValidate  autoComplete="off">
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
           {this.state.handleCreateUser==true?
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
             <button className="buttonUserComponent" type="button" onClick={this.handlePOSTUser} disabled={this.state.disabled}><i class="fas fa-save" ></i></button>
           </div>
           : ''
           } 

           {this.state.handleIconsPUT?
           <div className="iconsPUT">
             <button className="buttonUserComponent" type="button" onClick={this.handlePUTTUser} disabled={this.state.disabled}><i class="fas fa-user-edit" onClick={this.handlePUTUser}></i></button>
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

          {this.state.warning==true?<Warning></Warning>:''} 
         
      </div>
      
    );
   
  }  
 
}



 const mapStateToProps = (state) =>{
     return {
      data:state.users
  }
  }

export default connect(mapStateToProps,null)(UserTable);
