import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    bcg: { r: 255, g: 255, b: 255, a: 1 },
    textColor: { r: 0, g: 0, b: 0, a: 1 },
  },
  {
    bcg: { r: 255, g: 87, b: 87, a: 1 },
    textColor: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    bcg: { r: 124, g: 141, b: 87, a: 1 },
    textColor: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    bcg: { r: 255, g: 189, b: 89, a: 1 },
    textColor: { r: 255, g: 255, b: 255, a: 1 },
  },
  {
    bcg: { r: 255, g: 189, b: 89, a: 1 },
    textColor: { r: 0, g: 0, b: 0, a: 1 },
  },
  {
    bcg: { r: 238, g: 140, b: 58, a: 1 },
    textColor: { r: 255, g: 255, b: 255, a: 1 },
  },
];

interface IPopoverPopupState {
  onSelectFont?: any;
  selectedFont?: string;
  onSelectColorBcg: any;
}

const SelectOption: React.FC<IPopoverPopupState> = ({ onSelectColorBcg }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    selectedWorkingStep: selectOption[0],
  });
  const handleWorkingStepChange = (event: any) => {
    onSelectColorBcg(event.target.value);
    setState({ selectedWorkingStep: event.target.value });
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
            <MenuItem value={item}>{`Вариант ${index + 1}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectOption;
