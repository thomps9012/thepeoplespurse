import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./RangeSliders.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = withStyles({
  root: {
    color: '#11A8BD',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    border: '1px solid',
    marginTop: -11,
    marginLeft: 0,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: 7,
    fontSize: 16,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 8,
  },
  rail: {
    height: 8,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);


export default function InputSlider() {
  const classes = useStyles();

  const [value, setValue] = React.useState(3);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value2, setValue2] = React.useState(1);
  const handleSliderChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  const [value3, setValue3] = React.useState(19);
  const handleSliderChange3 = (event, newValue3) => {
    setValue3(newValue3);
  };

  const [value4, setValue4] = React.useState(1);
  const handleSliderChange4 = (event, newValue4) => {
    setValue4(newValue4);
  };

  const [value5, setValue5] = React.useState(1);
  const handleSliderChange5 = (event, newValue5) => {
    setValue5(newValue5);
  };

  const [value6, setValue6] = React.useState(28);
  const handleSliderChange6 = (event, newValue6) => {
    setValue6(newValue6);
  };

  const [value7, setValue7] = React.useState(2);
  const handleSliderChange7 = (event, newValue7) => {
    setValue7(newValue7);
  };

  const [value8, setValue8] = React.useState(1);
  const handleSliderChange8 = (event, newValue8) => {
    setValue8(newValue8);
  };

  const [value9, setValue9] = React.useState(1);
  const handleSliderChange9 = (event, newValue9) => {
    setValue9(newValue9);
  };

  const [value10, setValue10] = React.useState(1);
  const handleSliderChange10 = (event, newValue10) => {
    setValue10(newValue10);
  };

  const [value11, setValue11] = React.useState(2);
  const handleSliderChange11 = (event, newValue11) => {
    setValue11(newValue11);
  };

  const [value12, setValue12] = React.useState(17);
  const handleSliderChange12 = (event, newValue12) => {
    setValue12(newValue12);
  };

  const [value13, setValue13] = React.useState(1);
  const handleSliderChange13 = (event, newValue13) => {
    setValue13(newValue13);
  };

  const [value14, setValue14] = React.useState(1);
  const handleSliderChange14 = (event, newValue14) => {
    setValue14(newValue14);
  };

  const [value15, setValue15] = React.useState(1);
  const handleSliderChange15 = (event, newValue15) => {
    setValue15(newValue15);
  };

  const [value16, setValue16] = React.useState(1);
  const handleSliderChange16 = (event, newValue16) => {
    setValue16(newValue16);
  };

  const [value17, setValue17] = React.useState(1);
  const handleSliderChange17 = (event, newValue17) => {
    setValue17(newValue17);
  };

  const [value18, setValue18] = React.useState(10);
  const handleSliderChange18 = (event, newValue18) => {
    setValue18(newValue18);
  };


  const [value19, setValue19] = React.useState(2);
  const handleSliderChange19 = (event, newValue19) => {
    setValue19(newValue19);
  };

  const [value20, setValue20] = React.useState(3);
  const handleSliderChange20 = (event, newValue20) => {
    setValue20(newValue20);
  };

  const [value21, setValue21] = React.useState(2);
  const handleSliderChange21 = (event, newValue21) => {
    setValue21(newValue21);
  };

  const [value22, setValue22] = React.useState(1);
  const handleSliderChange22 = (event, newValue22) => {
    setValue22(newValue22);
  };
  // const handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };

  return (
    <div className="sliders">
      <div className={classes.root}>
        <Typography id="input-slider" gutterBottom>
          Department of Agriculture
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoA"
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Commerce
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoC"
              value={typeof value2 === 'number' ? value2 : 0}
              onChange={handleSliderChange2}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Defense
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoD"
              value={typeof value3 === 'number' ? value3 : 0}
              onChange={handleSliderChange3}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Energy
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoE"
              value={typeof value4 === 'number' ? value4 : 0}
              onChange={handleSliderChange4}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Education
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoEd"
              value={typeof value5 === 'number' ? value5 : 0}
              onChange={handleSliderChange5}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Health and Human Services
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoHHS"
              value={typeof value6 === 'number' ? value6 : 0}
              onChange={handleSliderChange6}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Homeland Security
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoHS"
              value={typeof value7 === 'number' ? value7 : 0}
              onChange={handleSliderChange7}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of the Interior
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoI"
              value={typeof value8 === 'number' ? value8 : 0}
              onChange={handleSliderChange8}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Labor
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoL"
              value={typeof value9 === 'number' ? value9 : 0}
              onChange={handleSliderChange9}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of State
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoS"
              value={typeof value10 === 'number' ? value10 : 0}
              onChange={handleSliderChange10}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Transportation
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoT"
              value={typeof value11 === 'number' ? value11 : 0}
              onChange={handleSliderChange11}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Treasury
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoTr"
              value={typeof value12 === 'number' ? value12 : 0}
              onChange={handleSliderChange12}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Environmental Protection Agency
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="EPA"
              value={typeof value13 === 'number' ? value13 : 0}
              onChange={handleSliderChange13}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Federal Communication Comission
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="FCC"
              value={typeof value14 === 'number' ? value14 : 0}
              onChange={handleSliderChange14}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Federal Election Comission
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="FEC"
              value={typeof value15 === 'number' ? value15 : 0}
              onChange={handleSliderChange15}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Federal Trade Comission
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="FTC"
              value={typeof value16 === 'number' ? value16 : 0}
              onChange={handleSliderChange16}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Housing and Urban Development
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="HUD"
              value={typeof value17 === 'number' ? value17 : 0}
              onChange={handleSliderChange17}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Social Security
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="SS"
              value={typeof value18 === 'number' ? value18 : 0}
              onChange={handleSliderChange18}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Justice
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoJ"
              value={typeof value19 === 'number' ? value19 : 0}
              onChange={handleSliderChange19}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          National Aeronautics and Space Administration
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="NASA"
              value={typeof value20 === 'number' ? value20 : 0}
              onChange={handleSliderChange20}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Department of Veterans Affairs
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="DoVA"
              value={typeof value21 === 'number' ? value21 : 0}
              onChange={handleSliderChange21}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.root} >
        <Typography id="input-slider" gutterBottom>
          Equal Opportunity Employment Commission
      </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <IOSSlider
              aria-label="ios slider"
              id="EOEC"
              value={typeof value22 === 'number' ? value22 : 0}
              onChange={handleSliderChange22}
              aria-labelledby="input-slider"
              valueLabelDisplay="on"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

