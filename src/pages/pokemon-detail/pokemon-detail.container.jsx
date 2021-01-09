import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import PokemonDetail from "./pokemon-detail.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const GET_POKEMON_BY_NAME = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      height
      weight
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
        slot
      }
    }
  }
`;

const PokemonDetailContainer = ({ match }) => {
  return (
    <Query query={GET_POKEMON_BY_NAME} variables={{ name: match.params.name }}>
      {({ loading, data }) => {
        if (loading) return <LoadingSpinner />;
        return <PokemonDetail pokemon={data.pokemon} />;
      }}
    </Query>
  );
};

export default PokemonDetailContainer;