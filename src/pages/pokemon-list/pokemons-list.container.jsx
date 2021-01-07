import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import PokemonsList from "./pokemons-list.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component"

const GET_POKEMONS = gql`
  {
    pokemons(limit: 20, offset: 0) {
      results {
        id
        name
        image
        url
      }
    }
  }
`;

const PokemonListContainer = () => (
  <Query query={GET_POKEMONS}>
    {({ loading, data }) => {
      return loading ? (
        <LoadingSpinner />
      ) :<PokemonsList results={data.pokemons.results}/>;
    }}
  </Query>
);

export default PokemonListContainer;
