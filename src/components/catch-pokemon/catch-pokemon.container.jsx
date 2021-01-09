import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import CatchPokemon from "./catch-pokemon.component";

const ADD_POKEMON_TO_LIST = gql`
  mutation AddPokemon {
    addPokemon @client
  }
`;

const CatchIconContainer = () => (
  <Mutation mutation={ADD_POKEMON_TO_LIST}>
    {(addPokemon) => <CatchPokemon addPokemon={addPokemon} />}
  </Mutation>
);

export default CatchIconContainer;
