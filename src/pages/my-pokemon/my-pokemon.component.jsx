import React from "react";

import { Container } from "./my-pokemon.styles";
import MyPokemonCard from "../../components/my-pokemon-card/my-pokemon-card.component";

const MyPokemon = () => {
  return (
    <Container>
      <MyPokemonCard />
    </Container>
  );
};

export default MyPokemon;
