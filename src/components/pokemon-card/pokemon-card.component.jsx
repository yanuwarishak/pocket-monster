import React from "react";
import { withRouter } from "react-router-dom";

import { Card } from "./pokemon-card.styles";

const PokemonCard = ({ match, history, name, image }) => {
  return (
    <div onClick={() => history.push(`${match.url}pokemon/${name}`)}>
      <Card backgroundImg={image}>
        <h3>{name}</h3>
      </Card>
    </div>
  );
};

export default withRouter(PokemonCard);
