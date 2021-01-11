import { gql } from "apollo-boost";

import { addPokemon } from "./my-pokemon.utils";

export const typeDefs = gql`
  extend type Pokemon {
    nickname: String
    image: String
  }

  extend type Mutation {
    AddPokemonToList(pokemon: Pokemon!): Pokemon!
  }
`;

const GET_MY_POKEMON_LIST = gql`
  {
    myPokemonsList @client
  }
`;

export const resolvers = {
  Mutation: {
    addPokemonToList: (_root, _args, { cache }) => {
      const { myPokemonsList } = cache.readQuery({
        query: GET_MY_POKEMON_LIST,
      });
      console.log(_args);
      const newMyPokemonsList = addPokemon(myPokemonsList, _args.pokemon);

      cache.writeQuery({
        query: GET_MY_POKEMON_LIST,
        data: { myPokemonsList: newMyPokemonsList },
      });

      return newMyPokemonsList;
    },
  },
};
