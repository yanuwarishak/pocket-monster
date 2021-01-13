import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PunctuationMark = styled.h1`
  font-size: 100px;
  margin: 10px 0px;
  color: red;
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
  margin: 0px 0px 40px 0px;
  font-size: 20px;
  color: #000;
`;
