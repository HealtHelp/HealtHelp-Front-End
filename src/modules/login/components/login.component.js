import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: true,
  };


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLogin = () =>{
    this.setState({ open: false });
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const data={
      username,
      password 
    }
    this.props.handleLogin(data);
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
              id="username"
              label="Username"
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