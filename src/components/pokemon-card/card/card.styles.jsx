import styled from "@emotion/styled";

import { typeColors } from "../../pokemon-type/pokemon-type.styles";

export const CardContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 315px;
  height: 500px;
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  box-shadow: 0 0px 6px 2px ${(props) => `${typeColors[props.poketype]}40`};
  background: linear-gradient(
    #f3f3f3,
    ${(props) => `${typeColors[props.poketype]}40`}
  );
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
`;

export const PokemonName = styled.h3`
  position: relative;
  margin: 0px;
  margin-bottom: 1em;
  top: 10px;
  color: black;
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
`;

export const TypeText = styled.h4`
  font-size: 1.1em;
  margin: 0px 5px;
  color: ${(props) => typeColors[props.poketype]};
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 10px;
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
`;

export const StatText = styled.h4`
  font-size: 0.7em;
  margin: 0px 5px;
  color: #005bb1;
`;

export const Owned = styled.div`
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
  font-size: 0.8em;
  margin: 0px 5px;
  color: white;
`;
