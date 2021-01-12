import React from "react";
import { NavLink } from "react-router-dom";

import { Container } from "./header.styles";

const Header = ({ pokemonCount }) => {
  return (
    <Container>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        <h3>Home</h3>
      </NavLink>
      <NavLink
        exact
        to="/my-pokemon"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        <h3>
          My Pokemon
          <span> {pokemonCount.length}</span>
        </h3>
      </NavLink>
    </Container>
  );
};
export default Header;
