import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Header from "./header.component";

const GET_MY_POKEMON_LIST = gql`
  {
    myPokemonsList @client
  }
`;

const HeaderContainer = () => (
  <Query query={GET_MY_POKEMON_LIST}>
    {({ data: { myPokemonsList } }) => (
      <Header pokemonCount={myPokemonsList.length} />
    )}
  </Query>
);

export default HeaderContainer;
