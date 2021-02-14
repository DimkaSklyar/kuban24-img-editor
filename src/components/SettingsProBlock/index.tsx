import React from "react";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton, Switch, Typography } from "@material-ui/core";
import SelectFonts from "../SelectFonts";
import SelectFontSize from "../SelectFontSize";
import {
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  VerticalAlignBottom,
  VerticalAlignCenter,
  VerticalAlignTop,
} from "@material-ui/icons";
import SelectOption from "../SelectOption";
import SelectColorBlock from "../SeletColorBlock";
import { useDispatch, useSelector } from "react-redux";
import {
  setHorizontalAlign,
  setVerticalAlign,
  setVerticalPosition,
} from "../../redux/actions/alignment";
import { setShowLogo } from "../../redux/actions/logo";
import { IAlignment } from "../../types/interfaces";
import SelectTypeLogo from "../SelectTypeLogo";

interface SettingsProBlock {
  disabled: boolean;
}

const arrayTextAlign = {
  left: <FormatAlignLeft />,
  center: <FormatAlignCenter />,
  right: <FormatAlignRight />,
};

const SettingsProBlock: React.FC<SettingsProBlock> = ({ disabled }) => {
  const dispatch = useDispatch();

  const [state, setState] = React.useState(false);
  const [logo, setLogo] = React.useState(true);

  const { verticalPosition } = useSelector(
    ({ alignment }: IAlignment) => alignment
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(!state);
  };

  const handleChangeShowLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setShowLogo(!logo));
    setLogo(!logo);
  };

  const handleSelectTextAlign = (align: string) => {
    dispatch(setHorizontalAlign(align));
  };

  const handleSelectVerticalAlign = (align: boolean) => {
    dispatch(setVerticalAlign(align));
  };

  const handleSelectVerticalPosition = (align: boolean) => {
    dispatch(setVerticalPosition(align));
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState: any) => (
        <div>
          <IconButton
            disabled={!disabled}
            aria-label="settings"
            color="primary"
            {...bindTrigger(popupState)}
          >
            <SettingsIcon />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Box p={2}>
              <Switch
                checked={state}
                onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>Чудо настройки</span>
              <SelectFonts />
              <SelectFontSize />
              <Typography>Позиция</Typography>
              <IconButton
                color="primary"
                aria-label="position bottom"
                component="span"
                onClick={() => handleSelectVerticalAlign(false)}
              >
                <VerticalAlignBottom />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="position top"
                component="span"
                onClick={() => handleSelectVerticalAlign(true)}
              >
                <VerticalAlignTop />
              </IconButton>
              <Typography>Выравнивание</Typography>
              {arrayTextAlign &&
                Object.keys(arrayTextAlign).map((item: string) => (
                  <IconButton
                    key={item}
                    color="primary"
                    aria-label={`align ${item}`}
                    component="span"
                    onClick={() => handleSelectTextAlign(item)}
                  >
                    {(arrayTextAlign as any)[item]}
                  </IconButton>
                ))}
              <IconButton
                color="primary"
                aria-label="align center"
                component="span"
                onClick={() => handleSelectVerticalPosition(!verticalPosition)}
              >
                <VerticalAlignCenter />
              </IconButton>
              <div>
                <Switch
                  checked={logo}
                  onChange={handleChangeShowLogo}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                <span>Логотип</span>
              </div>
              {logo && (
                <React.Fragment>
                  <Typography>Тип логотипа</Typography>
                  <SelectTypeLogo />
                </React.Fragment>
              )}
              {state ? (
                <SelectColorBlock />
              ) : (
                <React.Fragment>
                  <Typography>Вариант оформления</Typography>
                  <SelectOption />
                </React.Fragment>
              )}
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default SettingsProBlock;
