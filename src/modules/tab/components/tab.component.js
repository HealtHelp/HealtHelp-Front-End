import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import LocalHospital from '@material-ui/icons/LocalHospital';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NoEncryption from  '@material-ui/icons/NoEncryption';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handleChangeTab(value);
  };



  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            
          >
            <Tab label="Start" icon={<NavigateBefore />} />
            <Tab label="The Clinic" icon={<LocalHospital />} />
            <Tab label="Services" icon={<PersonPinIcon />} />
            <Tab label="Request Appointment" icon={<HelpIcon />} />
            <Tab label="Contact" icon={<PhoneIcon />} />
            <Tab label="Login"  icon={<NoEncryption />} />
            
          </Tabs>
        </AppBar>
        
        {value === 1 && <TabContainer>Clinic</TabContainer>}
        {value === 2 && <TabContainer>Services</TabContainer>}
        {value === 3 && <TabContainer>Request Appointment</TabContainer>}     
        {value === 4 && <TabContainer>Contact</TabContainer>}
        {value === 5 && <TabContainer>Login</TabContainer>}
      </div>
      
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);