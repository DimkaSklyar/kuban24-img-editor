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

export interface IScreenShotSettings {
  scrollY: number;
  x: number;
  height: number;
  imageTimeout: number;
  allowTaint: boolean;
}
