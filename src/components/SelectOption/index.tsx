import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { setBackgroundColor, setTextColor } from "../../redux/actions/color";
import { IColorRGBA } from "../../types/interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const selectOption = [
  {
    colorBcg: { r: 255, g: 255, b: 255, a: 1 },
    colorText: { r: 0, g: 0, b: 0, a: 1 },
  },
  {
    colorBcg: { r: 255, g: 87, b: 87, a: 1 },
    colorText: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    colorBcg: { r: 124, g: 141, b: 87, a: 1 },
    colorText: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    colorBcg: { r: 255, g: 189, b: 89, a: 1 },
    colorText: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    colorBcg: { r: 255, g: 189, b: 89, a: 1 },
    colorText: { r: 0, g: 0, b: 0, a: 1 },
  },
  {
    colorBcg: { r: 238, g: 140, b: 58, a: 1 },
    colorText: { r: 255, g: 255, b: 255, a: 1 },
  },
];
interface I {
  selectedWorkingStep: {
    colorBcg: IColorRGBA;
    colorText: IColorRGBA;
  };
}

const SelectOption = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = React.useState<I>({
    selectedWorkingStep: selectOption[0],
  });
  const handleWorkingStepChange = (event: any) => {
    setState({ selectedWorkingStep: event.target.value });
    dispatch(setTextColor(event.target.value.colorText));
    dispatch(setBackgroundColor(event.target.value.colorBcg));
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={state.selectedWorkingStep}
          onChange={handleWorkingStepChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            <em>Выбор Варианта</em>
          </MenuItem>
          {selectOption.map((item: any, index: number) => (
            <MenuItem key={`Вариант ${index + 1}`} value={item}>{`Вариант ${
              index + 1
            }`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectOption;
