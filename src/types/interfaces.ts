export interface IColorRGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface ISettingsState {
  color: {
    colorBcg: IColorRGBA;
    colorText: IColorRGBA;
  };
}

enum ITextAlign {
  center = "center",
  left = "left",
  right = "right",
}

export interface IAlignment {
  alignment: {
    horizontalAlign: ITextAlign;
    verticalAlign: boolean;
    verticalPosition: boolean;
  };
}

export interface IScreenShotSettings {
  scrollY: number;
  x: number;
  height: number;
  imageTimeout: number;
  allowTaint: boolean;
}
