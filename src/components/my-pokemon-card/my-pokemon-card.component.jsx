import React from "react";
import { withRouter } from "react-router-dom";

import {
  CardContainer,
  PokemonImage,
  PokemonDataContainer,
  PokemonNickname,
  PokemonName,
} from "./my-pokemon-card.styles";

import { default as ReleasePokemon } from "../release-button/release-button.container";

const MyPokemonCard = ({ name, nickname, image, history }) => {
  const openDetail = () => {
    history.push(`/pokemon/${name}`);
  };

  return (
    <CardContainer>
      <PokemonImage image={image} onClick={openDetail} />
      <PokemonDataContainer>
        <PokemonNickname>{nickname}</PokemonNickname>
        <PokemonName>{name}</PokemonName>
        <ReleasePokemon nickname={nickname} />
      </PokemonDataContainer>
    </CardContainer>
  );
};

export default withRouter(MyPokemonCard);
