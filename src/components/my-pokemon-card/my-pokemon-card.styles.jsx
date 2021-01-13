import styled from "@emotion/styled";
import mediaQuery from "../../media-queries/media-queries";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 150px;
  background-color: whitesmoke;
  margin-bottom: 10px;
  ${mediaQuery("lg")} {
    height: 120px;
    width: 100%;
  }
  ${mediaQuery("sm")} {
    height: 100px;
  }
`;

export const PokemonImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-color: #81db81;
  background-repeat: no-repeat;
  height: 100%;
  width: 25%;
  ${mediaQuery("md")} {
    background-size: 75px 75px;
    width: 30%
  }
`;

export const PokemonDataContainer = styled.div`
  display: flex;
  padding: 5px 15px;
  width: 75%;
  max-height: 150px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PokemonNickname = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
  margin: 0px;
  font-weight: bolder;
`;

export const PokemonName = styled.h3`
  text-transform: capitalize;
  font-size: 14px;
  margin: 0px;
  font-weight: normal;
  ${mediaQuery("md")} {
    font-size: 12px;
  }
`;
