import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Card from "./card/card.component";

const GET_POKEMON_TYPE_STATS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;

const PokemonCardContainer = ({ pokemon }) => {
  // The destructured value will contain pokemon object which hold pokemon.name and pokemon.image
  const { name, image } = pokemon;
  return (
    <Query query={GET_POKEMON_TYPE_STATS} variables={{ name: name }}>
      {({ loading, data }) => {
        let pokemonType = [];
        let pokemonStats = [];
        if (!loading) {
          const stats = data.pokemon.stats;
          const types = data.pokemon.types;
          stats.forEach((element) => {
            let statName = element.stat.name;
            let val = element.base_stat;
            pokemonStats.push({ statName, val });
          });
          types.forEach((element) => {
            pokemonType.push(element.type.name);
          });
        }
        return (
          <Card
            stats={pokemonStats}
            type={pokemonType}
            name={name}
            image={image}
          />
        );
      }}
    </Query>
  );
};

export default PokemonCardContainer;
