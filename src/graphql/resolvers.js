import { gql } from "apollo-boost";

import { addPokemon, releasePokemon } from "./my-pokemon.utils";

export const typeDefs = gql`
  extend type Pokemon {
    nickname: String
    image: String
  }

  extend type Mutation {
    AddPokemonToList(pokemon: Pokemon!): [Pokemon]!
    RemovePokemonFromList(nickname: String!): [Pokemon]!
  }
`;

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

export const resolvers = {
  Mutation: {
    addPokemonToList: (_root, { pokemon }, { cache }) => {
      const { myPokemonsList } = cache.readQuery({
        query: GET_MY_POKEMON_LIST,
      });
      console.log(myPokemonsList);
      const newMyPokemonsList = addPokemon(myPokemonsList, pokemon);
      console.log(newMyPokemonsList);

      cache.writeQuery({
        query: GET_MY_POKEMON_LIST,
        data: { myPokemonsList: newMyPokemonsList },
      });

      return newMyPokemonsList;
    },

    removePokemonFromList: (_root, { nickname }, { cache }) => {
      const { myPokemonsList } = cache.readQuery({
        query: GET_MY_POKEMON_LIST,
      });

      console.log(nickname);
      const newPokemonsList = releasePokemon(myPokemonsList, nickname);

      cache.writeQuery({
        query: GET_MY_POKEMON_LIST,
        data: { myPokemonsList: newPokemonsList },
      });

      return newPokemonsList;
    },
  },
};
