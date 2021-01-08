import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Card from "./pokemon-card.styles";

const GET_POKEMON_TYPE = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      types {
        type {
          name
        }
      }
    }
  }
`;

const PokemonCardContainer = ({ pokemonName, image }) => {
  return (
    <Query query={GET_POKEMON_TYPE} variables={{ name: pokemonName }}>
      {({ loading, data }) => {
        let pokemonType = [];
        if (!loading) {
          const type = data.pokemon.types;
          type.forEach((element) => {
            pokemonType.push(element.type.name);
          });
        }
        return <Card type={pokemonType} name={pokemonName} image={image}/>;
      }}
    </Query>
  );
};

export default PokemonCardContainer;
