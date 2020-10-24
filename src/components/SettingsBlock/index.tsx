import React from "react";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import SettingsIcon from "@material-ui/icons/Settings";
import { Button, IconButton } from "@material-ui/core";
import SelectFonts from "../SelectFonts";

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

const PopoverPopupState: React.FC<IPopoverPopupState> = ({
  onSelectFont,
  selectedFont,
}) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState: any) => (
        <div>
          <IconButton
            aria-label="settings"
            color="primary"
            {...bindTrigger(popupState)}
          >
            <SettingsIcon />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2}>
              <Button variant="contained" color="primary">
                Добавить надпись
              </Button>
              <SelectFonts
                onSelectFont={onSelectFont}
                selectedFont={selectedFont}
              />
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default PopoverPopupState;
