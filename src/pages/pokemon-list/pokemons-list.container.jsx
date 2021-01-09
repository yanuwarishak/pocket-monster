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
    variables={{ limit: 20, offset: 0 }}
    notifyOnNetworkStatusChange={true}
  >
    {({ loading, data, fetchMore }) => {
      return loading && !data ? (
        <LoadingSpinner />
      ) : (
        <PokemonsList
          loading={loading}
          results={data.pokemons.results}
          onLoadMore={() =>
            fetchMore({
              variables: {
                limit: 12,
                offset: data.pokemons.results.length,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                let prevResult = prev.pokemons.results;
                let combinedResult = prevResult.concat(
                  fetchMoreResult.pokemons.results
                );
                let results = {
                  pokemons: {
                    results: combinedResult,
                    __typename: "PokemonList",
                  },
                };
                return results;
              },
            })
          }
        />
      );
    }}
  </Query>
);

export default PokemonListContainer;
