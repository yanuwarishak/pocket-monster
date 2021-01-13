import React, { useState } from "react";
import { PokemonImage } from "../../pages/pokemon-detail/pokemon-detail.styles";
import { typeColors } from "../pokemon-type/pokemon-type.styles";

import {
  FormContainer,
  FormOverlay,
  CardContainer,
  Form,
  Submit,
  TextInput,
  CaughtText,
  FormLabel,
  CloseButton,
} from "./nickname-form.styles";

const NicknameForm = ({
  show,
  handleClose,
  pokemonOwned,
  addPokemonToList,
  pokemon,
}) => {
  const [nickname, setNickname] = useState("");
  const [invalid, setInvalid] = useState(false);

  const display = show ? { display: "flex" } : { display: "none" };

  let existingNickname = pokemonOwned.map((pokemon) => pokemon.nickname);
  const newPokemon = {
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    nickname: nickname.toLowerCase(),
  };

  const typeColor = pokemon.types[0].type.name;

  const formHandler = (event) => {
    event.preventDefault();
    event.target.value = "";
    if (existingNickname.indexOf(nickname) === -1 && nickname !== "") {
      addPokemonToList(newPokemon);
      handleClose();
    }
    if (existingNickname.indexOf(nickname) !== -1 || nickname === "") {
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 1500);
    }
    setNickname("");
  };

  return (
    <FormContainer style={display}>
      <FormOverlay>
        <CardContainer>
          <CloseButton onClick={handleClose}>X</CloseButton>
          <Form onSubmit={formHandler}>
            <CaughtText>{pokemon.name} Caught!</CaughtText>
            <PokemonImage
              style={{ backgroundColor: `${typeColors[typeColor]}` }}
              image={pokemon.sprites.front_default}
            />
            <FormLabel invalid={invalid}>
              {invalid ? "Nickname Invalid!" : "Give it a Nickname!"}
            </FormLabel>
            <TextInput
              type="text"
              value={nickname}
              invalid={invalid}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Submit type="submit" value="Submit" />
          </Form>
        </CardContainer>
      </FormOverlay>
    </FormContainer>
  );
};

export default NicknameForm;
