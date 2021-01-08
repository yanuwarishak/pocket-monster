import React from "react";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";

import { ListContainer } from "./pokemons-list.styles";

const PokemonList = ({ results }) => (
  <ListContainer>
    {results.map(({ id, ...otherProps }) => (
      <PokemonCard key={id} {...otherProps} />
    ))}
  </ListContainer>
);

export default PokemonList;
