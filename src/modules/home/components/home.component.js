import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme =>( {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class Home extends React.Component {
  
   handleActuator = () =>{
    let data = 'ok'; 
    this.props.handleActuator(data);
  }  
  
render(){
  const { classes } =this.props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          HealtHelp Organization 
        </Typography>
        <Typography variant="h5" component="h2">
         Control Panel APIRESTfull  HealtHelp Organization 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Control of patients,sessions and billing
        </Typography>
        <Typography component="p">
        Press the descriptive button according to your needs.
          <br />
          {'"Support: healthelporganization@gmail.com"'}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="primary" onClick={this.handleActuator} className={classes.button}>
        Actuator
      </Button>
      <Button variant="contained" color="primary"  className={classes.button}>
        Users
      </Button>
      <Button variant="contained" color="primary"  className={classes.button}>
        Patients
      </Button>
      </CardActions>
    </Card>
  );
}
 
}



export default withStyles(styles)(Home);