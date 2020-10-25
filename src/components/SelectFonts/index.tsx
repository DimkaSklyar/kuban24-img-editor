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

interface IPopoverPopupState {
  onSelectFont:
    | ((
        event: React.ChangeEvent<{
          name?: string | undefined;
          value: unknown;
        }>,
        child: React.ReactNode
      ) => void)
    | undefined;
  selectedFont: string;
}

const SelectFonts: React.FC<IPopoverPopupState> = ({
  onSelectFont,
  selectedFont,
}) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={selectedFont}
          onChange={onSelectFont}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            <em>Выбор шрифта</em>
          </MenuItem>
          <MenuItem value={"'Inter', sans-serif"}>Inter</MenuItem>
          <MenuItem value={"'Consolas'"}>Consolas</MenuItem>
          <MenuItem value={"'Times New Romans'"}>Times New Romans</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFonts;
