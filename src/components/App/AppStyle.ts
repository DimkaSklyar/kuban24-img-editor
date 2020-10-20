import styled from "styled-components";
import { DropzoneAreaBase } from "material-ui-dropzone";

export const SCTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
`;

export const ContainerStyle = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
`;

export const AppStyle = styled.div`
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-direction: column;
`;

export const SCDropzoneAreaBaseStyle = styled(DropzoneAreaBase)`
  height: 100%;
  width: 100%;
`;
