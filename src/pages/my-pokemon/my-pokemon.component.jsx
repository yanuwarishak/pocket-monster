import React, { useEffect } from "react";

import {
  ListContainer,
  Container,
  NoList,
  CatchText,
  PokeballImage,
  HomeButton,
  RibbonHeader,
} from "./my-pokemon.styles";

import MyPokemonCard from "../../components/my-pokemon-card/my-pokemon-card.component";
import { Link } from "react-router-dom";

const MyPokemons = ({ myPokemons }) => {
  useEffect(() => {
    document.title = "My Pokemon";
  }, []);
  localStorage.setItem("myPokemonsList", JSON.stringify(myPokemons));

  return (
    <Container>
      <RibbonHeader>My Pokemon</RibbonHeader>
      {myPokemons.length ? (
        <ListContainer>
          {myPokemons.map(({ name, nickname, image }) => (
            <MyPokemonCard
              key={nickname}
              name={name}
              nickname={nickname}
              image={image}
            />
          ))}
        </ListContainer>
      ) : (
        <NoList>
          <CatchText>It's lonely here...</CatchText>
          <CatchText>Let's catch some Pokemon!</CatchText>
          <PokeballImage />
          <Link to="/">
            <HomeButton>Open Pokedex</HomeButton>
          </Link>
        </NoList>
      )}
    </Container>
  );
};

export default MyPokemons;
