import styled from "@emotion/styled";
import mediaQuery from "../../media-queries/media-queries";

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  ${mediaQuery("md")} {
    margin-bottom: 50px;
  }
`;

export const RibbonHeader = styled.div`
  z-index: 3;
  display: none;
  position: fixed;
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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 80%;
`;

export const NoList = styled.div`
  display: flex;
  height: calc(100vh - 50px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  overflow: hidden;
`;

export const CatchText = styled.h1`
  margin: 0;
  font-size: 20px;
  color: #084b5c;
`;

export const PokeballImage = styled.div`
  background-image: url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fafa59;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin: 20px 0px;
`;

export const HomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin: 0px 0px;
  width: fit-content;
  height: 50px;
  background-color: #084b5c;
  border-radius: 5px;

  text-align: center;
  font-weight: bold;
  color: white;
`;
