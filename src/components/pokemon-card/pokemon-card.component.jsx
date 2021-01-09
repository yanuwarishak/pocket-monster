import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

import PokemonCardContainer from "./pokemon-card.container";

const PokemonCard = ({ name, image }) => {
  // Use history to open Pokemon detail based from URL
  let history = useHistory();
  const openDetail = () => {
    history.push(`/pokemon/${name}`);
  };

  // Additional styling
  const Container = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 10px;
  `;

  return (
    <Container onClick={openDetail}>
      <PokemonCardContainer image={image} pokemonName={name} />
    </Container>
  );
};

export default withRouter(PokemonCard);
