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

interface SettingsProBlock {
  onSelectTextAlign: (i: number) => void;
  disabled: boolean;
  verticalCenter: boolean;
  setVerticallCenter: any;
  setPositionBlock: any;
}

const SettingsProBlock: React.FC<SettingsProBlock> = ({
  onSelectTextAlign,
  disabled,
  verticalCenter,
  setVerticallCenter,
  setPositionBlock,
}) => {
  const [state, setState] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(!state);
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
                onClick={() => setPositionBlock(true)}
              >
                <VerticalAlignBottom />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="position top"
                component="span"
                onClick={() => setPositionBlock(false)}
              >
                <VerticalAlignTop />
              </IconButton>
              <Typography>Выравнивание</Typography>
              <IconButton
                color="primary"
                aria-label="align left"
                component="span"
                onClick={() => onSelectTextAlign(0)}
              >
                <FormatAlignLeft />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="align center"
                component="span"
                onClick={() => onSelectTextAlign(1)}
              >
                <FormatAlignCenter />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="align right"
                component="span"
                onClick={() => onSelectTextAlign(2)}
              >
                <FormatAlignRight />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="align center"
                component="span"
                onClick={() => setVerticallCenter(!verticalCenter)}
              >
                <VerticalAlignCenter />
              </IconButton>
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
