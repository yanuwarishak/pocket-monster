import React from "react";
import { OwnedContainer, OwnedText } from "./pokemon-owned.styles";

const Owned = ({ pokemonOwned, pokemonName }) => {
  let ownedPokemon = pokemonOwned.filter(
    (pokemon) => pokemon.name === pokemonName
  );
  let ownedTotal = ownedPokemon.length;
  return (
    <OwnedContainer>
      <OwnedText>Owned {ownedTotal}</OwnedText>
    </OwnedContainer>
  );
};

export default Owned;
