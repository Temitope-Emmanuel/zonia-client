import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box} from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    padding:theme.spacing(0,.9),
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"column"
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 10000,
    label: '#10,000',
  },
  {
    value: 25000,
    label: '#25,000',
  },
  {
    value: 50000,
    label: '#50,000',
  },
  {
    value: 75000,
    label: '#75,000',
  },
  {
    value: 100000,
    label: '#100,000',
  },
 ];

function valuetext(value) {
  return `${value}`;
}

const DiscreteSlider = function() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Slider
        defaultValue={25000}
        min={10000}
        max={100000}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1000}
        marks={marks}
        valueLabelDisplay="on"
      />
      <Typography id="discrete-slider-always" gutterBottom>
        Select Price #(10,000 - 100,000)
      </Typography>
    </Box>
  );
}

export default DiscreteSlider