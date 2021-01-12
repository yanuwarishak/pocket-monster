import styled from "@emotion/styled";
import { typeColors } from "../../components/pokemon-type/pokemon-type.styles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    #f3f3f3,
    ${(props) => `${typeColors[props.poketype]}40`}
  );
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-color: ${(props) => typeColors[props.poketype]};
  background-size: 350px 350px;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const PokemonName = styled.h2`
  font-size: 24px;
  color: black;
  text-align: center;
  border-radius: 10px;
  margin: 10px;
`;

export const TypeContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px #aaaaaa;
  border-radius: 20px;
  margin: auto;
  margin-bottom: -10px;
  width: fit-content;
  padding: 5px 10px;
  background-color: #ffffff;
`;

export const TypeText = styled.h4`
  font-size: 1.1em;
  margin: 0px 5px;
  color: ${(props) => typeColors[props.poketype]};
`;

export const MoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 10px;
  margin: 20px 40px;
  padding: 20px;
  height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MoveText = styled.h3`
  font-size: 20px;
  color: white;
  background-color: #222222;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px 5px;
`;
