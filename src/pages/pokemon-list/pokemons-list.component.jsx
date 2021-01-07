import React from "react";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";

import { ListContainer } from "./pokemons-list.styles";

const PokemonList = ({ results }) => (
  <ListContainer>
    {results.map(({ id, ...otherCollectionProps }) => (
      <PokemonCard key={id} {...otherCollectionProps} />
    ))}
  </ListContainer>
);

export default PokemonList;
