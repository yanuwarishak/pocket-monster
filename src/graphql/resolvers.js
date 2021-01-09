import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Mutation {
    AddPokemon: Int!
  }
`;

const ADD_POKEMON_TO_LIST = gql`
  {
    myPokemons @client
  }
`;

export const resolvers = {
  Mutation: {
    addPokemon: (_root, _args, { cache }) => {
      const { myPokemons } = cache.readQuery({
        query: ADD_POKEMON_TO_LIST,
      });

      cache.writeQuery({
        query: ADD_POKEMON_TO_LIST,
        data: { myPokemons: myPokemons + 1 },
      });
      return myPokemons;
    },
  },
};
