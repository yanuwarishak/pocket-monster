import React from "react";

import {
  Container,
  MyPokemonContainer,
  MyPokemon,
  NavIcon,
  StyledLink,
  IconName,
} from "./header.styles";

const Header = ({ pokemonCount }) => {
  return (
    <Container>
        <StyledLink
          exact
          to="/"
          activeStyle={{
            color: "blue",
          }}
        >
          <NavIcon
            image={
              "https://i7.uihere.com/icons/96/679/581/game-pokedex-video-icon-30e2e7a374245f80537945c65eb6228d.png"
            }
          />
          <IconName>Pokedex</IconName>
        </StyledLink>
        <StyledLink
          exact
          to="/my-pokemon"
          activeStyle={{
            color: "blue",
          }}
        >
          <MyPokemonContainer>
            <NavIcon
              image={"https://image.flaticon.com/icons/png/128/743/743977.png"}
            />
            <MyPokemon> {pokemonCount.length}</MyPokemon>
          </MyPokemonContainer>
          <IconName>My Pokemon</IconName>
        </StyledLink>
    </Container>
  );
};
export default Header;
