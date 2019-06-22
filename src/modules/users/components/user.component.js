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



function createData(Username,Email,Profile,Tenant) {
  return { Username, Email, Profile, Tenant };
}


class UserTable extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      data:[],
      handleCreateUser:false,
      handleIconsPOST:false,
      handleIconsPUT:false
    }

   };
   

  
  componentWillMount(){
    store.dispatch(handleGetUsers())
  }

  
  renderTable() {
    if(this.props.data.data.length === 0){
      return []
    }
      let users = this.props.data.data._embedded.userDToes;
      const rows = users.map((user) => createData(user.username,user.email,user.profile,user.tenant))
      return rows;
  }

  renderDimension(){
    let val;
    {window.screen.width <= 375?val=true:val=false}
    return val;
  }

 



/*
var rows = document.getElementsByTagName('tr');
for(var x = 0, xLength = rows.length; x < xLength; x++) {  
   alert('rowIndex=' + rows[x].rowIndex);
}


*/ 





  handleClick(ex){
   //console.log(ex.target)
   let u = document.getElementById("usernameTable");
   let username = Object.values(ex.target)[1].children;
   document.getElementById("username").value = username;
   let e = document.getElementById("emailTable"); 
   let email = Object.values(e)[1].children;
   document.getElementById("email").value = email;
   let p = document.getElementById("profileTable");
   let profile = Object.values(p)[1].children;
   document.getElementById("profile").value = profile;
   let t = document.getElementById("tenantTable");
   let tenant = Object.values(t)[1].children;
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
        //handleIconsPUT:true
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

  
  handlePOSTUser(){
    alert("HANDLEPOSTUSER")
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
             <TableBody  onClick={this.handleClick}>
               {rows.map(row => (
                 <StyledTableRow key={row.name}>
                   <StyledTableCell component="th" scope="row" id="usernameTable">
                     {row.Username}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="emailTable">{row.Email}</StyledTableCell>
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
             <TableBody onClick={this.handleClick}>
               {rows.map(row => (
                 <StyledTableRow key={row.name}>
                   <StyledTableCell  component="th" scope="row" id="usernameTable">
                     {row.Username}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="emailTable">
                   {row.Email}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="profileTable">{row.Profile}</StyledTableCell>
                   <StyledTableCell align="right" id="tenantTable">{row.Tenant}</StyledTableCell>
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
             />
              <TextField
               id="email"
               //label="Email"
               placeholder="Email"
               className={classes.textField}
             />
             <TextField
               id="profile"
               //label="Profile"
               placeholder="Profile"
               className={classes.textField}
             />
              <TextField
               id="tenant"
               //label="Tenant"
               placeholder="Tenant"
               className={classes.textField}
             />
           {this.state.handleCreateUser==true?
            <div id="textFieldsPassword">
            <TextField
               id="standard-password-input"
               label="Password"
               className={classes.textField}
               type="password"
               autoComplete="current-password"
             /> <br></br>
              <TextField
               id="standard-password-input2"
               label="Repit Password"
               className={classes.textField}
               type="password"
               autoComplete="current-password"
             /> 
            </div> 
            : ''
         }
        </div> 
           
           {this.state.handleIconsPOST?
           <div className="iconsPOST">
           <i class="fas fa-save" onClick={this.handlePOSTUser}></i>
           </div>
           : ''
           } 

           {this.state.handleIconsPUT?
           <div className="iconsPUT">
           <i class="fas fa-user-edit" onClick={this.handlePUTUser}></i>
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
