import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

import PokemonCardContainer from "./pokemon-card.container";

const PokemonCard = ({ match, name, image }) => {
  let history = useHistory();

  const openDetail = () => {
    history.push(`${match.url}pokemon/${name}`);
  }

  return (
    <div
      className="card-container"
      style={{ width: "fit-content", height: "fit-content" }}
      onClick={openDetail}
    >
      <PokemonCardContainer image={image} pokemonName={name} />
    </div>
  );
};

export default withRouter(PokemonCard);
