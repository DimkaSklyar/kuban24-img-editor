import styled from "styled-components";

export const SCTextArea = styled.textarea`
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
`;

export const SCText = styled.pre<{
  verticalPosition: boolean;
}>`
  resize: none;
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 390px;
  font-family: "Inter";
  border: 1px solid black;
  white-space: pre-wrap;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 5;
  ${(props) =>
    props.verticalPosition &&
    `display: flex; justify-content: center;
  align-items: center;`}
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
