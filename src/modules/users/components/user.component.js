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
import FormComponent from '../components/form.component';
import SuccessPOSTUser from '../../snackbars/components/sucessPOSTUser.component';
import SuccessPUTUser from '../../snackbars/components/successPUTUser.component';
import SuccessDELETEUser from '../../snackbars/components/successDELETEUser.component';
import ErrorPOST from '../../snackbars/components/errorPOSTUser.component';
import Footer from '../../footer/components/footer.component';


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
        width: '100%'
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
      sucessPOST:null,
      successPUT:null,
      successDELETE:null,
      handleId:0,
      errorPOST:null,
      successPOST:null
    }
    this.rows = [];  

    store.subscribe(() => {
      this.setState({
        errorPOST : store.getState().notification.userPOST,
        successPOST : store.getState().users.successPOST
      });
    });
   };
   

  
   componentWillMount(){
    window.scrollTo(0, 0);
    let promise = new Promise(function(resolve){
      resolve(
        store.dispatch(handleGetUsers())
      )
    });
    promise.then(
      store.subscribe(() => {
        this.rows = store.getState().users.data._embedded.userDToes  
    })
    ); 
  }


  componentWillReceiveProps(){
    this.renderTable();
  } 

  renderTable() {
    if(this.props.data.data.length === 0){
      return []
    }
    else{
       if(this.props.data.data._embedded === undefined){
         return [];
       }
       else{
        let users = this.props.data.data._embedded.userDToes;
        this.rows = users.map((user) => createData(user.id,user.username,user.email,user.profile,user.tenant)); 
        return this.rows;
      }
    }        
  }

 
 
   handleClickUsername(ex){
    let username = Object.values(ex.target)[1].children;
    document.getElementById("username").value = username;
    return username;
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

  handleCheckedId = (event) =>{
    let id = event.target.value;
        this.setState(function(){
          return {
            id
          } 
        },  (event) => {
          this.setState({handleId:id})
         console.log(id)
          const myBoard = document.getElementsByTagName("table")[0];
        const mytbody = myBoard.getElementsByTagName("tbody")[0];
        const myRow = mytbody.getElementsByTagName("tr")[id-1];
      
        const myCell1 = myRow.getElementsByTagName("th")[1];
        const myCell2 = myRow.getElementsByTagName("td")[0];
        const myCell3 = myRow.getElementsByTagName("td")[1];
        const myCell4 = myRow.getElementsByTagName("td")[2];
       
       
        const username = myCell1.firstChild.nodeValue;
        const email = myCell2.firstChild.nodeValue;
        const profile = myCell3.firstChild.nodeValue;
        const tenant = myCell4.firstChild.nodeValue;
        document.getElementById("username").value = username; 
        document.getElementById("email").value = email
        document.getElementById("profile").value = profile;
        document.getElementById("tenant").value = tenant; 

        });
   }

 
 
  successPUT = (value) =>{
    this.setState({
      successPUT:value
    })
  }
  
   
  successPOST = (value) =>{
    this.setState({
      successPOST:value
    })
  }

  successDELETE = (value) =>{
    this.setState({
      successDELETE:value
    })
  }


   
  render(){

    const classes = useStyles;
    return (
      <div className="tableUsers">
      
           <Paper className={classes.root}>
           <Table className={classes.table}>
             <TableHead>
               <TableRow>
                 <StyledTableCell></StyledTableCell>
                 <StyledTableCell>Username</StyledTableCell>
                 <StyledTableCell align="center">Email</StyledTableCell>
                 <StyledTableCell align="right">Profile</StyledTableCell>
                 <StyledTableCell align="center">Tenant</StyledTableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {this.rows.map(row => (
                 <StyledTableRow key={row.name} id="table">
                   <StyledTableCell  component="th" scope="row" id='usernameId'>
                     <input type="checkbox" value={row.Id} id="userId" onChange={this.handleCheckedId}></input>
                   </StyledTableCell>
                   <StyledTableCell  component="th" scope="row" id="usernameTable" onClick={this.handleClickUsername}>
                     {row.Username}
                   </StyledTableCell>
                   <StyledTableCell align="center" id="emailTable" onClick={this.handleClickEmail}>
                   {row.Email}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="profileTable" onClick={this.handleClickProfile} >
                   {row.Profile}
                   </StyledTableCell>
                   <StyledTableCell align="center" id="tenantTable" onClick={this.handleClickTenant}>
                   {row.Tenant}
                   </StyledTableCell>
                 </StyledTableRow>
               ))}
             </TableBody>
           </Table>
         </Paper>
         
        

          <FormComponent successPUT={this.successPUT} successPOST={this.successPOST} successDELETE={this.successDELETE} handleId={this.state.handleId}></FormComponent>
          {this.state.successPOST?<SuccessPOSTUser></SuccessPOSTUser>:''}
          {this.state.successPUT?<SuccessPUTUser></SuccessPUTUser>:''}
          {this.state.successDELETE?<SuccessDELETEUser></SuccessDELETEUser>:''}
          {this.state.errorPOST?<ErrorPOST></ErrorPOST>:''}
          <Footer></Footer>
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
