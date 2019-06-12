import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
            
           
            <Link to="/"><Tab label="Start" icon={<NavigateBefore />} /></Link>
            <Link to="/clinic"><Tab label="The Clinic" icon={<LocalHospital />} /></Link>
            <Link to="/services"><Tab label="Services" icon={<PersonPinIcon />} /></Link>
            <Link to="/appointment"><Tab label="Request Appointment" icon={<HelpIcon />} /></Link>
            <Link to="/contact"><Tab label="Contact" icon={<PhoneIcon />} /></Link>
            <Link to="/login"><Tab label="Login"  icon={<NoEncryption />} /> </Link>
            
            
            
            
            
          </Tabs>
        </AppBar>
       
        {value === 1 }
        {value === 2 }
        {value === 3 }     
        {value === 4 }
        {value === 5 && <TabContainer>HealtHelp APIRestful Control Panel</TabContainer>}
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);