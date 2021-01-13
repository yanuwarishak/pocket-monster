import styled from "@emotion/styled";
import mediaQuery from "../../media-queries/media-queries";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  ${mediaQuery("md")} {
    margin-bottom: 50px;
  }
`;

export const RibbonHeader = styled.div`
  display: none;
  position: fixed;
  z-index: 3;
  top: 0;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  font-weight: bold;
  padding: 10px 20px;
  height: 50px;
  background-color: whitesmoke;
  border-bottom: 1px solid #8a8a8aa4;
  ${mediaQuery("md")} {
    display: flex;
  }
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

  padding: 20px;

  margin-bottom: 20px;

  width: 80%;
  height: 25px;
  border-radius: 5px;
  background-color: #e8f4ff;
  color: black;
  font-weight: bold;
  border: 1px solid #89b8ff;
`;
