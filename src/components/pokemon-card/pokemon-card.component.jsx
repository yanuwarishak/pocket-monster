import React from "react";
import { withRouter } from "react-router-dom";
import styled from "@emotion/styled";

import PokemonCardContainer from "./pokemon-card.container";

const PokemonCard = (props) => {
  const { history, name } = props;
  const pokemon = { name: props.name, image: props.image };
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
      <PokemonCardContainer pokemon={pokemon} />
    </Container>
  );
};

// Bear in mind that withRouter will add history, match, location and staticContext to the props
export default withRouter(PokemonCard);
