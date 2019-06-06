import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 60,
    width: 400,
    height: 300,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center">
<<<<<<< HEAD
    <Avatar  src="../../img/healthelp.jpg" className={classes.bigAvatar} />
=======
    <Avatar alt="Healthelp" src="/img/logo.jpg" className={classes.bigAvatar} />
>>>>>>> 1fd35b404ab617912835ffe6d6f787aca7e3b041
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);