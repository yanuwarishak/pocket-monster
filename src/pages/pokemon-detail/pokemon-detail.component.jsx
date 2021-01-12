import React, { useState } from "react";

import {
  Container,
  MoveContainer,
  MoveText,
  PokemonImage,
  PokemonName,
  TypeContainer,
  TypeText,
} from "./pokemon-detail.styles";
import CatchFailed from "../../components/catch-failed/catch-failed.component";
import { default as NicknameForm } from "../../components/nickname-form/nickname-form.container";
import Pokeball from "../../components/pokeball/pokeball.component";

const PokemonDetail = ({ pokemon }) => {
  // Put all types on an array
  console.log(pokemon);
  let pokemonTypes = [];
  let typesArr = pokemon.types;
  typesArr.forEach((element) => {
    pokemonTypes.push(element.type.name);
  });
  // Put all moves on an array
  let pokemonMoves = [];
  let movesArr = pokemon.moves;
  movesArr.forEach((element) => {
    pokemonMoves.push(element.move.name);
  });

  // const { type } = pokemon;
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
    <Container poketype={pokemonTypes[0]}>
      <PokemonName>{pokemon.name.toUpperCase()}</PokemonName>
      <TypeContainer>
        {pokemonTypes.map((type, index) => (
          <TypeText key={index} poketype={type}>
            {type.toUpperCase()}
          </TypeText>
        ))}
      </TypeContainer>
      <PokemonImage
        image={pokemon.sprites.front_default}
        poketype={pokemonTypes[0]}
      />
      <div onClick={catchPokemon}>
        <Pokeball />
      </div>
      <NicknameForm pokemon={pokemon} show={showForm} handleClose={hideForm} />
      <CatchFailed show={showFailed} handleClose={hideFailed} />
      <h2>Moves</h2>
      <MoveContainer>
        {pokemonMoves.map((moves) => (
          <MoveText>{moves}&nbsp;</MoveText>
        ))}
      </MoveContainer>
      {/* <h2>{pokemon.weight}</h2> */}
      {/* <h2>{pokemon.height}</h2> */}
    </Container>
  );
};

export default PokemonDetail;
