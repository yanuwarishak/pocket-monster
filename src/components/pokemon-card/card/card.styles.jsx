import styled from "@emotion/styled";
import { typeColors } from "../../pokemon-type/pokemon-type.styles";
import mediaQuery from "../../../media-queries/media-queries";

export const CardContainer = styled.div`
  cursor: pointer;
  position: relative;
  align-self: flex-start;
  box-sizing: border-box;
  width: 315px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  box-shadow: 0 0px 6px 2px ${(props) => `${typeColors[props.poketype]}40`};
  background: linear-gradient(
    #f3f3f3,
    ${(props) => `${typeColors[props.poketype]}40`}
  );
  :hover {
    background: linear-gradient(
      #f3f3f3,
      ${(props) => `${typeColors[props.poketype]}66`}
    );
  }
  ${mediaQuery("xs")} {
    width: 250px;
    height: 350px;
  }
`;

export const PokemonType = styled.div`
  position: relative;
  left: 0;
  top: 5px;
  margin: 5px 5px;
  height: 25px;
  width: 25px;
  float: left;
  border-radius: 50%;
  background-color: ${(props) => typeColors[props.poketype]};
  ${mediaQuery("xs")} {
    width: 12px;
    height: 12px;
  }
`;

export const Pokeimage = styled.img`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-color: ${(props) => typeColors[props.poketype]};
  background-repeat: no-repeat;
  background-position: center;
  border: 0px solid transparent;
  margin-top: 5px;
  height: 82%;
  width: 90%;
  ${mediaQuery("xs")} {
    height: 75%;
  }
`;

export const PokemonName = styled.h3`
  text-transform: capitalize;
  text-shadow: 1px 1px ${(props) => `${typeColors[props.poketype]}66`};
  position: relative;
  margin: 0px;
  margin-bottom: 1em;
  top: 10px;
  color: black;
  ${mediaQuery("xs")} {
    top: 5px;
    margin-bottom: 0.5em;
  }
`;

export const ImageContainer = styled.div`
  height: 60%;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px #aaaaaa;
  border-radius: 20px;
  margin: auto;
  margin-top: 10px;
  width: fit-content;
  padding: 5px 10px;
  background-color: #ffffff;
  ${mediaQuery("xs")} {
    padding: 2px 5px;
    margin-top: 0px;
  }
`;

export const TypeText = styled.h4`
  font-size: 1.1em;
  margin: 0px 5px;
  color: ${(props) => typeColors[props.poketype]};
  ${mediaQuery("xs")} {
    font-size: 0.9em;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 5px;
  ${mediaQuery("xs")} {
    padding: 0px 2px;
  }
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px #aaaaaa;
  border-radius: 20px;
  margin-top: 10px;
  width: fit-content;
  padding: 5px 10px;
  background-color: #ffffff;
  ${mediaQuery("xs")} {
    padding: 1px 1px;
    margin-top: 7.5px;
  }
`;

export const StatText = styled.h4`
  font-size: 0.7em;
  margin: 0px 5px;
  color: #005bb1;
  ${mediaQuery("xs")} {
    font-size: 0.64em;
  }
`;
