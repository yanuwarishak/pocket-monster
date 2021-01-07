import React from "react";

import { Card } from "./pokemon-card.styles";

const PokemonCard = (props) => {
  return (
    <Card backgroundImg={props.image}>
      <h3>{props.name}</h3>
    </Card>
  );
};

export default PokemonCard;
