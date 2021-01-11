import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  background-color: whitesmoke;
  margin-bottom: 10px;
`;

export const PokemonImage = styled.div`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-color: green;
  background-repeat: no-repeat;
  height: 100%;
  width: 25%;
`;

export const PokemonDataContainer = styled.div`
  display: flex;
  padding: 15px 15px;
  width: 75%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PokemonNickname = styled.h3`
  font-size: 24px;
  margin: 0px;
  font-weight: bolder;
`;

export const PokemonName = styled.h3`
  font-size: 20px;
  margin: 0px;
  font-weight: bolder;
`;

export const ReleaseBtn = styled.button`
  align-self: flex-end;
  background-color: red;
  width: fit-content;
  padding: 10px;
  height: 100px;
`;
