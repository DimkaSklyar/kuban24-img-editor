import styled from "styled-components";

export const SCTextArea = styled.textarea<{ fonts: string }>`
  resize: none;
  width: 100%;
  height: 100%;
  font-family: ${(props) => props.fonts};
`;

export const SCConteinerUpload = styled.div`
  width: 800px;
  text-align: right;
`;

export const SCContainerRectangle = styled.div`
  width: 800px;
  text-align: right;
`;

export const AppContainerStyle = styled.div`
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-direction: column;
  height: 100vh;
`;
