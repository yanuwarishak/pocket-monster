import React, { useState } from "react";

import { Container, CatchButton } from "./pokemon-detail.styles";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";
import CatchFailed from "../../components/catch-failed/catch-failed.component";
import { default as NicknameForm } from "../../components/nickname-form/nickname-form.container";

const PokemonDetail = ({ pokemon }) => {
  const [showFailed, setShowFailed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const hideFailed = () => {
    setShowFailed(false);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  const catchPokemon = () => {
    let caught = Math.floor(Math.random() * 2);
    if (caught) {
      setShowForm(true);
    } else {
      setShowFailed(true);
    }
  };

  return (
    <Container>
      <CatchFailed show={showFailed} handleClose={hideFailed} />
      <NicknameForm pokemon={pokemon} show={showForm} handleClose={hideForm} />
      <PokemonCard image={pokemon.sprites.front_default} name={pokemon.name} />
      <CatchButton onClick={catchPokemon}>
        <p>Catch</p>
      </CatchButton>
      {/* <h1>{pokemon.name}</h1>
      <h2>{pokemon.weight}</h2>
      <h2>{pokemon.height}</h2> */}
    </Container>
  );
};

export default PokemonDetail;
