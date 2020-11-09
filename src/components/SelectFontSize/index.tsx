import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setSelectFontSize } from "../../redux/actions/fontSize";

const useStyles = makeStyles({
  input: {
    width: 42,
  },
});

const SelectFontSize = () => {
  const dispatch = useDispatch();
  
  const fontSize = useSelector((settings: any) => settings.fontSize);
  const classes = useStyles();

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    console.log(newValue);
    dispatch(setSelectFontSize(newValue));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setSelectFontSize(
        event.target.value === "" ? 14 : Number(event.target.value)
      )
    );
  };

  const handleBlur = () => {
    if (fontSize < 14) {
      setSelectFontSize(14);
    } else if (fontSize > 200) {
      setSelectFontSize(200);
    }
  };

  return (
    <React.Fragment>
      <Typography id="input-slider" gutterBottom>
        Размер шрифта
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            min={14}
            max={250}
            value={typeof fontSize === "number" ? fontSize : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={fontSize}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 250,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SelectFontSize;
