import styled from "@emotion/styled";
import mediaQuery from "../../media-queries/media-queries";

export const ButtonContainer = styled.div`
  cursor: pointer;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: auto 0 10px 0;
  background-color: red;
  border-radius: 10px;
  ${mediaQuery("md")} {
    width: 75px;
    height: 30px;
  }
`;

export const ButtonText = styled.h3`
  font-size: 12px;
  color: white;
  text-align: center;
`;
