import React from "react";

import { Container, CatchText } from "./catch-pokemon.styles";

const CatchPokemon = ({ addPokemon }) => {
  function catchPokemon() {
    let caught = Math.floor(Math.random() * 2);
    if (caught) {
      addPokemon();
    } else {
      alert("It ran away!");
    }
  }
  return (
    <Container onClick={catchPokemon}>
      <CatchText>Catch Pokemon!</CatchText>
    </Container>
  );
};

export default CatchPokemon;
