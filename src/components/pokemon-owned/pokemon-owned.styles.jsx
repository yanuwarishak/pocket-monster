import styled from "@emotion/styled";

export const OwnedContainer = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px #aaaaaa;
  border-radius: 20px;
  margin: 0px 10px 10px 0px;
  width: fit-content;
  padding: 5px 10px;
  background-color: #3c70ff;
`;

export const OwnedText = styled.h4`
  font-size: 0.9em;
  font-weight: 500;
  margin: 0px 5px;
  color: white;
  @media (max-width: 320px) {
    font-size: 0.7em;
  }
`;