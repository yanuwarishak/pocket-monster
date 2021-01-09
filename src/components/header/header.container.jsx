import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Header from "./header.component";

const ADD_POKEMON_TO_LIST = gql`
  {
    myPokemons @client
  }
`;

const HeaderContainer = () => (
  <Query query={ADD_POKEMON_TO_LIST}>
    {({ data: { myPokemons } }) => <Header pokemonCount={myPokemons} />}
  </Query>
);

export default HeaderContainer;