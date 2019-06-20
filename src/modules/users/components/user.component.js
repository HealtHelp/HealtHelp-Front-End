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



// document.getElementById("ocultar").style.display = "none";
//document.getElementById("ocultar2").style.display = "block";

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
        width: 200,

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
      handleCreateUser:null
    }
   };//end constructor

  
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

  handleClick(){
    const username = document.getElementById("usernameTable").value;
    alert(username)
  }
 
  
  handleCreateUser = () =>{
    this.setState({handleCreateUser:true});
  }

  handleUpdateUser(){
    alert("handleUpdateUser")
  }

  handleDeleteUser(){
    alert("handleDeleteUser")
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
                 <StyledTableRow key={row.name} onClick={this.handleClick}>
                   <StyledTableCell component="th" scope="row" id="usernameTable">
                     {row.Username}
                   </StyledTableCell>
                   <StyledTableCell align="right">{row.Email}</StyledTableCell>
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
                 <StyledTableRow key={row.name} onClick={this.handleClick}>
                   <StyledTableCell  component="th" scope="row" id="usernameTable">
                     {row.Username}
                   </StyledTableCell>
                   <StyledTableCell align="right">
                   {row.Email}
                   </StyledTableCell>
                   <StyledTableCell align="right">{row.Profile}</StyledTableCell>
                   <StyledTableCell align="right">{row.Tenant}</StyledTableCell>
                 </StyledTableRow>
               ))}
             </TableBody>
           </Table>
         </Paper>
        }



        
        {this.state.handleCreateUser?
             <form className={classes.container}  autoComplete="off">
             <TextField
               id="username"
               label="Username"
               className={classes.textField}
             />
              <TextField
               id="email"
               label="Email"
               className={classes.textField}
             />
             <TextField
               id="profile"
               label="Profile"
               className={classes.textField}
             />
              <TextField
               id="tenant"
               label="Tenant"
               className={classes.textField}
             />
       
              <TextField
               id="standard-password-input"
               label="Password"
               className={classes.textField}
               type="password"
               autoComplete="current-password"
             />
              <TextField
               id="standard-password-input"
               label="Repit Password"
               className={classes.textField}
               type="password"
               autoComplete="current-password"
             /> 
             <div className="iconsCrud">
               <i class="fas fa-plus" onClick={this.handleCreateUser}></i>
               <i class="fas fa-pen-alt" onClick={this.handleUpdateUser}></i>
               <i class="fas fa-trash" onClick={this.handleDeleteUser}></i>
             </div>
             
             </form>
             :
             <form className={classes.container}  autoComplete="off">
             <TextField
               id="username"
               label="Username"
               className={classes.textField}
             />
              <TextField
               id="email"
               label="Email"
               className={classes.textField}
             />
             <TextField
               id="profile"
               label="Profile"
               className={classes.textField}
             />
              <TextField
               id="tenant"
               label="Tenant"
               className={classes.textField}
             />
             <div className="iconsCrud">
               <i class="fas fa-plus" onClick={this.handleCreateUser}></i>
               <i class="fas fa-pen-alt" onClick={this.handleUpdateUser}></i>
               <i class="fas fa-trash" onClick={this.handleDeleteUser}></i>
             </div>
             
             </form>

        }
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
