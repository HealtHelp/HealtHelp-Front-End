import React from 'react';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import LocalHospital from '@material-ui/icons/LocalHospital';
import NavigateBefore from '@material-ui/icons/NavigateBefore';



export default function TemporaryDrawer() {
  const classes = {
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    }
  }
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <List>
          <ListItem button key="Patients">
          <ListItemIcon><PhoneIcon></PhoneIcon></ListItemIcon>
          <ListItemText primary="Patients" />
          </ListItem>
          
          <ListItem button key="Sessions">
          <ListItemIcon><PhoneIcon></PhoneIcon></ListItemIcon>
          <ListItemText primary="Sessions" />
          </ListItem>

          <ListItem button key="Billing">
          <ListItemIcon><PersonPinIcon></PersonPinIcon></ListItemIcon>
          <ListItemText primary="Billing" />
          </ListItem>

      </List>

      <Divider />

     {/*  <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
     
     <List>

          <Link to="/clinic">
          <ListItem button key="Clinic">
          <ListItemIcon><LocalHospital></LocalHospital></ListItemIcon>
          <ListItemText primary="Clinic" />
          </ListItem>
          </Link>

          <Link to="/services">
          <ListItem button key="Services">
          <ListItemIcon><PersonPinIcon></PersonPinIcon></ListItemIcon>
          <ListItemText primary="Services" />
          </ListItem>
          </Link>

          <Link to="/appointment">
          <ListItem button key="Appointment">
          <ListItemIcon><HelpIcon></HelpIcon></ListItemIcon>
          <ListItemText primary="Appointment" />
          </ListItem>
          </Link>

          <Link to="/contact">
          <ListItem button key="Contact">
          <ListItemIcon><PhoneIcon></PhoneIcon></ListItemIcon>
          <ListItemText primary="Contact" />
          </ListItem>
          </Link>

     </List>


    </div>
  );

  

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>Open Menu</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

/**
 * <Link to="/start"><Tab label="Start" icon={<NavigateBefore />} /></Link>
            <Link to="/clinic"><Tab label="The Clinic" icon={<LocalHospital />} /></Link>
            <Link to="/services"><Tab label="Services" icon={<PersonPinIcon />} /></Link>
            <Link to="/appointment"><Tab label="Request Appointment" icon={<HelpIcon />} /></Link>
            <Link to="/contact"><Tab label="Contact" icon={<PhoneIcon />} /></Link>
 * 
 * 
 */