
import React from 'react';
import {connect} from 'react-redux';
import {handleNotifications} from '../actions/notification.actions';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InfoIcon from '@material-ui/icons/Info';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
    info: InfoIcon
 
};

const styles1 = theme => ({
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
     
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf([ 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class SuccessSnackbars extends React.Component {
  state = {
    open: true,
    success:null,
    successmessages:null,
  };
  
  


  handleClick = () => {
    this.setState({ open: true });
   
  };
  
  handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  this.setState({ open: false });
};
  

  render() {
    
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            variant="info"
            className={classes.margin}
            message="Insert your credentials!"
          />
        </Snackbar>
      
      </div>
    );
  }
}

SuccessSnackbars.propTypes = {
  classes: PropTypes.object.isRequired,
};


const notification =  withStyles(styles2)(SuccessSnackbars);
const mapStateToProps = (dispatch) =>({
    data:dispatch.data
    
  }) 
export default connect(mapStateToProps,{handleNotifications}) (notification);



