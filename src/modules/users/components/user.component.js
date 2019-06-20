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
        width: 200,

      }  
}


function createData(Username, Tenant, Profile, Email, Password) {
  return { Username, Tenant, Profile, Email, Password };
}



class UserTable extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      data:[],
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
      const rows = users.map((user) => createData(user.username,user.tenantId,user.profileId,user.email,user.password))
      return rows;
  }

  renderDimension(){
    let val;
    {window.screen.width <= 375?val=true:val=false}
    return val;
  }

  handleClick(){
    console.log('handleClick');
  }
 
  
  render(){
    const dimension = this.renderDimension();
    const classes = useStyles;
    const rows = this.renderTable()

    return (
      <div className="tableUsers" onClick={this.handleClick}>
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
                   <StyledTableCell component="th" scope="row">
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
                 <StyledTableCell align="right">Tenant</StyledTableCell>
                 <StyledTableCell align="right">Profile</StyledTableCell>
                 <StyledTableCell align="right">Email</StyledTableCell>
                 <StyledTableCell align="right">Password</StyledTableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {rows.map(row => (
                 <StyledTableRow key={row.name}>
                   <StyledTableCell component="th" scope="row">
                     {row.Username}
                   </StyledTableCell>
                   <StyledTableCell align="right">
                   {row.Tenant}
                   </StyledTableCell>
                   <StyledTableCell align="right">{row.Profile}</StyledTableCell>
                   <StyledTableCell align="right">{row.Email}</StyledTableCell>
                   <StyledTableCell align="right">{row.Password}</StyledTableCell>
                 </StyledTableRow>
               ))}
             </TableBody>
           </Table>
         </Paper>
        }
       <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="username"
        label="Username"
        className={classes.textField}
      />
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
