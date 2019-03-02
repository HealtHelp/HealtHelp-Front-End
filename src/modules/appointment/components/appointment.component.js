import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Start from '../../start/components/start.component';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },

  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



class FilledTextFields extends React.Component {


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
       <div >
           <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          We will answer you in less than 24 hours
        </Typography>
        <Typography component="p">
        Fill in the form.
        </Typography>
      </Paper>
            
      <form className={classes.container} noValidate autoComplete="off">
       
       

        
        <TextField
          id="filled-full-width"
          label="Your name"
          style={{ margin: 8 }}
          placeholder="Roberto del Barrio Pizarro"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="filled-full-width"
          label="Your email"
          style={{ margin: 8 }}
          placeholder="example@example.com"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="filled-full-width"
          label="Your phone"
          style={{ margin: 8 }}
          placeholder="666 66 66 66"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="filled-full-width"
          label="Give title you what you need"
          style={{ margin: 8 }}
          placeholder="Contracture"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />

         
        <TextField
          id="filled-full-width"
          label="Tell us what you need"
          style={{ margin: 8 ,marginBottom:2}}
          placeholder=""
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />

      <Button variant="contained" color="primary" className={classes.button } style={{marginBottom:2}}>
        SEND
      </Button>
 
 </form>
 <br></br>
 <Start></Start>
       </div> 
     
       
     
    );
  }
}

FilledTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);

