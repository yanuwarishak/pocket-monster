import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Header from "./header.component";

const GET_MY_POKEMON_LIST = gql`
  {
    myPokemonsList @client {
      name
      nickname
      image
      __typename
    }
  }
`;

const HeaderContainer = () => (
  <Query query={GET_MY_POKEMON_LIST}>
    {({ data: { myPokemonsList } }) => <Header pokemonCount={myPokemonsList} />}
  </Query>
);

export default HeaderContainer;
