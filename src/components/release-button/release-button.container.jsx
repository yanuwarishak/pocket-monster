import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import ReleaseButton from "./release-button.component";

const REMOVE_POKEMON_FROM_LIST = gql`
  mutation RemovePokemonFromList($nickname: String!) {
    removePokemonFromList(nickname: $nickname) @client
  }
`;

const ReleaseButtonContainer = ({ nickname }) => {
  return (
    <Mutation
      mutation={REMOVE_POKEMON_FROM_LIST}
      variables={{ nickname: nickname }}
    >
      {(removePokemonFromList) => (
        <ReleaseButton releasePokemon={removePokemonFromList} />
      )}
    </Mutation>
  );
};
export default ReleaseButtonContainer;
