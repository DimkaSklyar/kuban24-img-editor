import styled from "styled-components";
import { IColorRGBA } from "../../types/interfaces";

export const SCTextArea = styled.textarea<{
  color: {
    colorBcg: IColorRGBA;
    colorText: IColorRGBA;
  };
  font: string;
  fontSize: number | number[];
  aspectRation: boolean;
  alignment: any;
  countString: number;
}>`
  resize: none;
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 390px;
  font-family: "Inter";
  border: 1px solid black;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 2;
  ${({ font, fontSize, color, alignment, countString }) =>
    `font-family: ${font}, sans-serif;
    font-size: ${fontSize}px;
    background-color: rgba(${color.colorBcg.r},${color.colorBcg.g},${
      color.colorBcg.b
    },${color.colorBcg.a});
    color: rgba(${color.colorText.r},${color.colorText.g},${
      color.colorText.b
    },${color.colorText.a});
    top: ${alignment.verticalAlign ? "0" : ""};
    bottom: ${!alignment.verticalAlign ? "0" : ""};
    text-align: ${alignment.horizontalAlign};
    padding-top: ${
      alignment.verticalPosition
        ? `calc(390px / 2.${countString} - ${Number(fontSize) * 1.05}px)`
        : "0px"
    }
    `}
`;

export const SCText = styled.pre<{
  verticalPosition: boolean;
  color: {
    colorBcg: IColorRGBA;
    colorText: IColorRGBA;
  };
  font: string;
  fontSize: number | number[];
  aspectRation: boolean;
  alignment: any;
}>`
  resize: none;
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 390px;
  font-family: "Inter";
  white-space: pre-wrap;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 5;
  ${({ font, fontSize, color, alignment, verticalPosition }) =>
    verticalPosition &&
    `display: flex; justify-content: center;
    align-items: center;
    top: ${alignment.verticalAlign ? "0" : ""};
    bottom: ${!alignment.verticalAlign ? "0" : ""};
    text-align: ${alignment.horizontalAlign};
    background-color: rgba(${color.colorBcg.r},${color.colorBcg.g},${
      color.colorBcg.b
    },${color.colorBcg.a});
    color: rgba(${color.colorText.r},${color.colorText.g},${
      color.colorText.b
    },${color.colorText.a});
    font-family: ${font}, sans-serif;
    font-size: ${fontSize}px;
    `}
`;

export const SCConteinerUpload = styled.div`
  width: 800px;
  text-align: right;
`;

export const SCContainerRectangle = styled.div`
  width: 1080px;
  text-align: right;
`;

export const AppContainerStyle = styled.div`
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  min-width: 1300px;
`;
