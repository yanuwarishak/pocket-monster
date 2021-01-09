import React from "react";

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
  Owned,
  OwnedText,
} from "./card.styles";

const Card = (props) => {
  const { image, name, type, stats } = props;
  return (
    <CardContainer>
      <ImageContainer>
        <div style={{ position: "absolute" }}>
          {type.map((type, index) => (
            <PokemonType key={index} type={type} />
          ))}
        </div>
        <PokemonName>{name.toUpperCase()}</PokemonName>
        <Pokeimage image={image} type={type[0]} />
      </ImageContainer>
      <InfoContainer>
        <TypeContainer>
          {type.map((type, index) => (
            <TypeText key={index} type={type}>
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
        <Owned>
          <OwnedText>
              Owned: 0
          </OwnedText>
        </Owned>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
