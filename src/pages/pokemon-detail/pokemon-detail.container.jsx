import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import PokemonDetail from "./pokemon-detail.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import NotFound from "../not-found/not-found.component";

const GET_POKEMON_BY_NAME = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      height
      weight
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      sprites {
        front_default
      }
    }
  }
`;

const PokemonDetailContainer = ({ match }) => {
  return (
    <Query query={GET_POKEMON_BY_NAME} variables={{ name: match.params.name }}>
      {({ loading, data, error }) => {
        if (loading) return <LoadingSpinner />;
        if (data.pokemon.name === null)
          return <NotFound name={match.params.name} />;
        return <PokemonDetail pokemon={data.pokemon} />;
      }}
    </Query>
  );
};

export default PokemonDetailContainer;
