import React from "react";

import { Container } from "./my-pokemon.styles";
import MyPokemonCard from "../../components/my-pokemon-card/my-pokemon-card.component";

const MyPokemons = ({ myPokemons }) => {
  // const data = myPokemons.myPokemons;
  console.log(myPokemons);
  return (
    <div>
      {myPokemons.length ? (
        <Container>
          {myPokemons.map(({ id, name, nickname, image }) => (
            <MyPokemonCard
              key={id}
              name={name}
              nickname={nickname}
              image={image}
            />
          ))}
        </Container>
      ) : (
        <h1>Catch some Pokemon!</h1>
      )}
    </div>
  );
};

export default MyPokemons;
