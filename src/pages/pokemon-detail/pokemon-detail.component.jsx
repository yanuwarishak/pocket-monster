import React from "react";

import PokemonCard from "../../components/pokemon-card/pokemon-card.component";

import { Container } from "./pokemon-detail.styles";

import {default as CatchPokemon} from "../../components/catch-pokemon/catch-pokemon.container";

const PokemonDetail = ({ pokemon }) => {
  // const {name, abilities} = pokemon
  return (
    <Container>
      <PokemonCard image={pokemon.sprites.front_default} name={pokemon.name} />
      <CatchPokemon/>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.weight}</h2>
      <h2>{pokemon.height}</h2>
    </Container>
  );
};

export default PokemonDetail;
