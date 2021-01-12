import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Owned from "./pokemon-owned.component";

const GET_POKEMON_OWNED = gql`
  {
    myPokemonsList @client {
      name
      nickname
      image
      __typename
    }
  }
`;

const OwnedContainer = ({ name }) => (
  <Query query={GET_POKEMON_OWNED}>
    {({ data: { myPokemonsList } }) => (
      <Owned pokemonName={name} pokemonOwned={myPokemonsList} />
    )}
  </Query>
);

export default OwnedContainer;
