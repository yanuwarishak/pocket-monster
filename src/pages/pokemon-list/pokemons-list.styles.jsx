import styled from "@emotion/styled";
import mediaQuery from "../../media-queries/media-queries";

export const ListContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  ${mediaQuery("sm")} {
    background-color: white;
  }
`;
