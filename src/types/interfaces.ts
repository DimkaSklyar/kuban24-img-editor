export interface ISettingsState {
  settings: {
    font: string;
    fontSize: number | number[];
  };
}

export interface IScreenShotSettings {
  scrollY: number;
  x: number;
  height: number;
  imageTimeout: number;
  allowTaint: boolean;
}
