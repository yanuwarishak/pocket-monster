import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import MyPokemons from "./my-pokemon.component";

const GET_MY_POKEMON_LIST = gql`
  {
    myPokemonsList @client
  }
`;

const MyPokemonsContainer = () => (
  <Query query={GET_MY_POKEMON_LIST}>
    {({ data: { myPokemonsList } }) => (
      <MyPokemons myPokemons={myPokemonsList} />
    )}
  </Query>
);

export default MyPokemonsContainer;
