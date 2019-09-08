
import React from 'react';
import {connect} from 'react-redux';
import store from '../../../store/store';
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
  }
  
  
  
  function createData(Id,Name,DNI,LastName,Telephone,Address,Profession) {
    return {Id, Name, DNI, LastName, Telephone, Address, Profession};
  }
  

class TablePatient extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
        this.rows = [];  

        store.subscribe(() => {
            this.setState({
              data : store.getState().patients
            });
          });

    }

    componentWillReceiveProps(){
        this.renderTable();  
    }
    


    renderTable = () =>{
        if(this.state.data.data === undefined){
            return [];
        }
        else{
            if(this.state.data.data._embedded === undefined){
                return [];
            }
            let patients = this.state.data.data._embedded.patientDToes;
            console.log(patients)
            this.rows = patients.map((patient) => createData(patient.id,patient.patientName,patient.patientDNI,patient.patientLastName,patient.patientTelephone,patient.patientAddress,
                                                             patient.patientProfession)); 
            return this.rows;
              }
        }
    
        handleValues = (e) => {
        console.log("handleValues");
        let id = e.target.value;
        var data = [];
        e = e || window.event;
        var target = e.srcElement || e.target;
        while (target && target.nodeName !== "TR") {
         target = target.parentNode;
        } 
        if (target) {
          var cells = target.getElementsByTagName("td");
          for (var i = 0; i < cells.length; i++) {
            data.push(cells[i].innerHTML);
          }
          var ths = target.getElementsByTagName("th");
          for (var i = 0; i < ths.length; i++) {
            data.push(ths[i].innerHTML);
          } 
           data.splice(5,1)
          console.log(data)
          //desplegar form
          this.props.handleForm(true);
      } 
    }

    render(){
       
        const classes = useStyles;
        return(
            <div>
         <Paper className={classes.root}>
           <Table className={classes.table}>
             <TableHead>
               <TableRow>
                 <StyledTableCell></StyledTableCell>
                 <StyledTableCell>Name</StyledTableCell>
                 <StyledTableCell align="center">Last Name</StyledTableCell>
                 <StyledTableCell align="center">DNI</StyledTableCell>
                 <StyledTableCell align="right">Telephone</StyledTableCell>
                 <StyledTableCell align="center">Address</StyledTableCell>
                 <StyledTableCell align="center">Profession</StyledTableCell>
               </TableRow>
             </TableHead>
             <TableBody >
    
               {this.rows.map(row => (
                 <StyledTableRow key={row.Name} id="table">
                   <StyledTableCell  component="th" scope="row" id='id'>
                   
                     <input type="checkbox" className="inputId" value={row.Id} id="userId" onClick={this.handleValues}></input>
                    

                   </StyledTableCell>
                   <StyledTableCell  component="th" scope="row" id="patientName">
                     {row.Name}
                   </StyledTableCell>
                   <StyledTableCell align="center" id="patientLastName">
                   {row.LastName}
                   </StyledTableCell>
                   <StyledTableCell align="center" id="patientDNI">
                   {row.DNI}
                   </StyledTableCell>
                   <StyledTableCell align="right" id="patientTelephone">
                   {row.Telephone}
                   </StyledTableCell>
                   <StyledTableCell align="center" id="patientAddress">
                   {row.Address}
                   </StyledTableCell>
                   <StyledTableCell align="center" id="patientAddress">
                   {row.Profession}
                   </StyledTableCell>
                 </StyledTableRow>
               ))}
             </TableBody>
             
           </Table>
        
         </Paper>
            </div>
        );
    }
}



const mapStateToProps = (state) =>{
    return {
     data:state.patients
 }
 }

export default connect(mapStateToProps,null)(TablePatient);
