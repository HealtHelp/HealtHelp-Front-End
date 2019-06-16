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
      } 
}


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



class UserTable extends React.Component {


  componentWillMount(){
    const token = localStorage.getItem("jwt");
    console.log(token);  
    const HEADERS = {
        headers:{
            "Access-Control-Allow-Origin":"http://localhost:3000",
            "Authorization" : `${token}`
          }       
    }
    console.log(HEADERS);  
    store.dispatch(handleGetUsers(HEADERS.headers))
  } 

  render(){
    const classes = useStyles;

    return (
      <Paper className={classes.root} onLoad={this.handleUsers}>
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
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }  
 
}


const mapStateToProps = (dispatch) =>({
    data:dispatch.data,
  }) 

export default connect(mapStateToProps,null) (UserTable) ;
