import styled from "@emotion/styled";
import mediaQuery from "../../media-queries/media-queries";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-height: 1200px;
  max-width: 1344px;
  overflow: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  ${mediaQuery("sm")} {
    background-color: white;
  }
`;

export const LoadMore = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  width: 200px;
  height: 100px;
  background-color: yellow;
  color: black;
`;
