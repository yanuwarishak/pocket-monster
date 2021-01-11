import React from "react";

import { Container, CatchText } from "./catch-pokemon.styles";

const CatchPokemon = ({ addPokemonToList }) => {
  // console.log({ ...newPokemon, nickname: "Trevor" });
  function catchPokemon() {
    let caught = Math.floor(Math.random() * 2);
    if (caught) {
      addPokemonToList();
    } else {
      console.log("It ran away!");
    }
  }
  return (
    <Container onClick={(catchPokemon)}>
      <CatchText>Catch Pokemon!</CatchText>
    </Container>
  );
};

export default CatchPokemon;
