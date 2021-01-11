import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import NicknameForm from "./nickname-form.component";

const GET_POKEMON_OWNED = gql`
  {
    myPokemonsList @client
  }
`;

const NicknameFormContainer = ({show, handleClose}) => (
  <Query query={GET_POKEMON_OWNED}>
    {({ data: { myPokemonsList } }) => (
      <NicknameForm show={show} handleClose={handleClose} pokemonOwned={myPokemonsList} />
    )}
  </Query>
);

export default NicknameFormContainer;
