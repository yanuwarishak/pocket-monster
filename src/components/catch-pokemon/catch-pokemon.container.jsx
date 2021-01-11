import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CatchPokemon from "./catch-pokemon.component";

const ADD_POKEMON_TO_LIST = gql`
  mutation AddPokemonToList($pokemon: Pokemon!) {
    addPokemonToList(pokemon: $pokemon) @client
  }
`;

const CatchPokemonContainer = (props) => {
  console.log(props);
  const newPokemon = {
    name: props.pokemon.name,
    image: props.pokemon.sprites.front_default,
  };
  return (
    <Mutation
      mutation={ADD_POKEMON_TO_LIST}
      variables={{ pokemon: newPokemon }}
    >
      {(addPokemonToList) => (
        <CatchPokemon addPokemonToList={addPokemonToList} />
      )}
    </Mutation>
  );
};

export default CatchPokemonContainer;
