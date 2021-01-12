import styled from "@emotion/styled";
import mediaQuery from "../../media-queries/media-queries";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  padding: 20px 60px;
  flex-wrap: wrap;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  ${mediaQuery("sm")} {
    background-color: white;
  }
`;

export const LoadMore = styled.button`
  cursor: pointer;
  user-select: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  width: 200px;
  height: 25px;
  background-color: yellow;
  color: black;
`;
