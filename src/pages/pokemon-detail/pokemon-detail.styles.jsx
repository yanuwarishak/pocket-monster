import styled from "@emotion/styled";
import { typeColors } from "../../components/pokemon-type/pokemon-type.styles";
import mediaQuery from "../../media-queries/media-queries";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0px;
  min-height: 100vh;
  background: linear-gradient(
    #f3f3f3,
    ${(props) => `${typeColors[props.poketype]}40`}
  );
  margin-top: 50px;
  ${mediaQuery("md")} {
    margin-bottom: 50px;
    margin-top: unset;
  }
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-color: ${(props) => typeColors[props.poketype]};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  width: 50%;
  padding: 20px;
  height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  ${mediaQuery("md")} {
    width: 80%;
  }
`;

export const TableHeading = styled.div`
  z-index: 3;
  padding: 20px;
  width: 50%;
  align-self: center;
  background-color: whitesmoke;
  border-bottom: 2px solid #00000010;
  ${mediaQuery("md")} {
    width: 80%;
  }
`;

export const MoveText = styled.h3`
  text-transform: capitalize;
  font-size: 20px;
  width: calc(50% - 10px);
  color: white;
  background-color: #084b5c;
  border-radius: 5px;
  padding: 5px 0px;
  margin: 5px 5px;
  ${mediaQuery("md")} {
    width: 100%;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  justify-content: space-evenly;
`;

export const WeightHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 20px;
  padding: 10px 20px;
`;

export const SizeText = styled.h3`
  font-size: 20px;
  margin: 0px;
`;

export const Label = styled.p`
  font-size: 12px;
  align-self: flex-start;
  margin: 0px;
`;
