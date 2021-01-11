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

const MyPokemonCard = ({ name, nickname, image }) => {
  let history = useHistory();
  const openDetail = () => {
    history.push(`/pokemon/${name}`);
  };

  return (
    <CardContainer onClick={openDetail}>
      <PokemonImage image={image}/>
      <PokemonDataContainer>
        <PokemonNickname>{nickname.toUpperCase()}</PokemonNickname>
        <PokemonName>{name.toUpperCase()}</PokemonName>
        <ReleaseBtn>Release</ReleaseBtn>
      </PokemonDataContainer>
    </CardContainer>
  );
};

export default withRouter(MyPokemonCard);
