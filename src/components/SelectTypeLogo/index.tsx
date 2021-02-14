import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { setTypeLogo } from "../../redux/actions/logo";
import Logo from "../../assets/logo.png";
import LogoGray from "../../assets/logo_gray.png";
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

const selectTypeLogo = ["classic", "gray"];

const SelectTypeLogo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [state, setState] = React.useState(selectTypeLogo[0]);
  const handleWorkingStepChange = (event: any) => {
    setState(event.target.value);
    if (event.target.value === "classic") {
      dispatch(setTypeLogo(Logo));
    } else {
      dispatch(setTypeLogo(LogoGray));
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={state}
          onChange={handleWorkingStepChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            <em>Тип логотипа</em>
          </MenuItem>
          {selectTypeLogo.map((item: any, index: number) => (
            <MenuItem key={`Вариант ${index + 1}`} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectTypeLogo;
