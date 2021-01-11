import styled from "@emotion/styled";

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CardContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  width: 300px;
  height: 200px;
`;

export const CardText = styled.h3`
  font-size: 20px;
  color: #000;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
