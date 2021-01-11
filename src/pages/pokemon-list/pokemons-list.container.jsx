import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import PokemonsList from "./pokemons-list.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const PokemonListContainer = () => (
  <Query
    query={GET_POKEMONS}
    variables={{ limit: 12, offset: 0 }}
    notifyOnNetworkStatusChange={true}
  >
    {({ loading, data, fetchMore }) => {
      return loading && !data ? (
        <LoadingSpinner />
      ) : (
        <PokemonsList
          loading={loading}
          pokemons={data.pokemons.results}
          onLoadMore={() =>
            fetchMore({
              variables: {
                limit: 6,
                offset: data.pokemons.results.length,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                let prevResult = prev.pokemons.results;
                let combinedResult = prevResult.concat(
                  fetchMoreResult.pokemons.results
                );
                let pokemons = {
                  pokemons: {
                    results: combinedResult,
                    __typename: "PokemonList",
                  },
                };
                return pokemons;
              },
            })
          }
        />
      );
    }}
  </Query>
);

export default PokemonListContainer;
