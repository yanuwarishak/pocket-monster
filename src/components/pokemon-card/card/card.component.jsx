import React from "react";

import { default as Owned } from "../../pokemon-owned/pokemon-owned.container";

import {
  CardContainer,
  PokemonType,
  Pokeimage,
  PokemonName,
  ImageContainer,
  InfoContainer,
  TypeText,
  TypeContainer,
  StatText,
  StatContainer,
  StatsContainer,
} from "./card.styles";

const Card = (props) => {
  const { image, name, type, stats } = props;
  return (
    <CardContainer poketype={type[0]}>
      <ImageContainer>
        <div style={{ position: "absolute" }}>
          {type.map((type, index) => (
            <PokemonType key={index} poketype={type} />
          ))}
        </div>
        <PokemonName poketype={type[0]}>{name}</PokemonName>
        <Pokeimage image={image} poketype={type[0]} />
      </ImageContainer>
      <InfoContainer>
        <TypeContainer>
          {type.map((type, index) => (
            <TypeText key={index} poketype={type}>
              {type.toUpperCase()}
            </TypeText>
          ))}
        </TypeContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <StatContainer key={index}>
              <StatText key={index}>
                {stat.statName.toUpperCase()} {stat.val}
              </StatText>
            </StatContainer>
          ))}
        </StatsContainer>
        <Owned name={name} />
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
