import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import '../../css/style.css';

const tutorialSteps = [
  {
    label: 'Physiotherapy',
    imgPath:
      'http://as01.epimg.net/deporteyvida/imagenes/2017/08/09/portada/1502315521_526108_1502315618_noticia_normal.jpg',
  },
  {
    label: 'Osteophaty',
    imgPath:
      'https://www.fisioterapeutaenlegazpi.com.es/media/slider1/large/osteopatia.jpg',
  },
  {
    label: 'Dry puncture',
    imgPath:
      'https://grupfisioderm.com/wp-content/uploads/2016/05/puncion-seca-grupfisioderm.jpg',
  },
  {
    label: 'Hypopressives',
    imgPath:
      'http://naturalkaram.com/wp-content/uploads/2018/09/hipopresivos_valencia-838x480.png',
  },
  {
    label: 'Pilates',
    imgPath:
      'https://i2.wp.com/www.aserhco.com/wp-content/uploads/2016/09/Pilates.png?fit=680%2C680&ssl=1',
  },
  {
    label:'Hooks',
    imgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQo_PMN1B-weV5p6D-ZKlQoDbuQNbdbYDqD3b9B0708c2fsJF'
  }
];

const styles = theme => ({
  root: {
    maxWidth: 600,
    flexGrow: 1,
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 600,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
});

class TextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className="icon-services">
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);

