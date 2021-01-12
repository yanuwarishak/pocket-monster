import React from "react";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import NicknameForm from "./nickname-form.component";

const GET_POKEMON_OWNED = gql`
  {
    myPokemonsList @client {
      name
      nickname
      image
      __typename
    }
  }
`;

const ADD_POKEMON_TO_LIST = gql`
  mutation AddPokemonToList($pokemon: Pokemon!) {
    addPokemonToList(pokemon: $pokemon) @client
  }
`;

const NicknameFormContainer = ({ pokemon, show, handleClose }) => (
  <Query query={GET_POKEMON_OWNED}>
    {({ data: { myPokemonsList } }) => (
      <Mutation mutation={ADD_POKEMON_TO_LIST}>
        {(addPokemonToList) => (
          <NicknameForm
            show={show}
            handleClose={handleClose}
            pokemon={pokemon}
            pokemonOwned={myPokemonsList}
            addPokemonToList={(pokemon) =>
              addPokemonToList({ variables: { pokemon } })
            }
          />
        )}
      </Mutation>
    )}
  </Query>
);

export default NicknameFormContainer;
