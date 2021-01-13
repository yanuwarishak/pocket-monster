import React, { useState, useEffect } from "react";

import {
  Container,
  MoveContainer,
  MoveText,
  PokemonImage,
  PokemonName,
  TypeContainer,
  TypeText,
  SizeContainer,
  SizeText,
  WeightHeightContainer,
  Label,
  TableHeading,
} from "./pokemon-detail.styles";
import CatchFailed from "../../components/catch-failed/catch-failed.component";
import { default as NicknameForm } from "../../components/nickname-form/nickname-form.container";
import Pokeball from "../../components/pokeball/pokeball.component";

const PokemonDetail = ({ pokemon }) => {
  useEffect(() => {
    document.title = `${pokemon.name.toUpperCase()}`;
  }, [pokemon.name]);
  // Put all types on an array
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
      <NicknameForm pokemon={pokemon} show={showForm} handleClose={hideForm} />
      <CatchFailed show={showFailed} handleClose={hideFailed} />
      <PokemonName>{pokemon.name}</PokemonName>
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
        <Pokeball type={pokemonTypes[0]} />
      </div>
      <SizeContainer>
        <WeightHeightContainer>
          <Label>Weight</Label>
          <SizeText>{pokemon.weight / 100} kg</SizeText>
        </WeightHeightContainer>
        <WeightHeightContainer>
          <Label>Height</Label>
          <SizeText>{pokemon.height / 10} m</SizeText>
        </WeightHeightContainer>
      </SizeContainer>
      <TableHeading>
        <SizeText>Moves</SizeText>
      </TableHeading>
      <MoveContainer>
        {pokemonMoves.map((moves) => (
          <MoveText key={moves}>{moves}</MoveText>
        ))}
      </MoveContainer>
    </Container>
  );
};

export default PokemonDetail;
