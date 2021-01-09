import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  CardContainer,
  PokemonImage,
  PokemonDataContainer,
  PokemonNickname,
  PokemonName,
  ReleaseBtn,
} from "./my-pokemon-card.styles";

const MyPokemonCard = (name) => {
  let history = useHistory();
  const openDetail = () => {
    history.push(`/pokemon/bulbasaur`);
  };

  return (
    <CardContainer onClick={openDetail}>
      <PokemonImage />
      <PokemonDataContainer>
        <PokemonNickname>Kuntul Saurus</PokemonNickname>
        <PokemonName>Bulbasaur</PokemonName>
        <ReleaseBtn>Release</ReleaseBtn>
      </PokemonDataContainer>
    </CardContainer>
  );
};

export default withRouter(MyPokemonCard);
