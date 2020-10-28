import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch } from "react-redux";
import { setSelectFont } from "../../redux/actions/settings";

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

const arrFontFamily: string[] = ["'Inter'", "'Consolas'", "'Times New Romans'"];

const SelectFonts = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSelectFont = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setSelectFont(event.target.value as string));
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value="'Inter'"
          onChange={handleSelectFont}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            <em>Выбор шрифта</em>
          </MenuItem>
          {arrFontFamily &&
            arrFontFamily.map((item: string) => (
            <MenuItem key={item} value={`${item}`}>{item.replace(/'/gi,'')}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFonts;
