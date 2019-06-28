import React from 'react';
import {connect} from 'react-redux';
import store from '../../../store/store';
import {handleLogin} from '../actions/login.actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

 class FormDialog extends React.Component {
  state = {
    open: true,
  };


  handleClickOpen = () => {
    this.setState({ open: true });
  };


  handleLogin = () =>{
    this.setState({ open: false });
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data={
      email,
      password 
    }
    store.dispatch(handleLogin(data));
  }
  

  render() {
    return (
      <div>
       
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Enter your credentials and access the API management
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={this.handleLogin}>
              Send
            </Button>
          </DialogActions>
        </Dialog>
       
      </div>
    );
  }
}


const mapStateToProps = (dispatch) =>({
  data:dispatch.data,
}) 


export default connect(mapStateToProps,{handleLogin}) (FormDialog);

