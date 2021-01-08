import React from "react";
import styled from "@emotion/styled";

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A8B820",
  rock: "#B6A136",
  ghost: "#735797",
  poison: "#A33EA1",
  fighting: "#C22E28",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
  shadow: "#131A45",
  unknown: "#6DA2B2",
};

const CardContainer = styled.div`
  position: relative;
  margin: 10px;
  width: 300px;
  height: 450px;
  border-radius: 5px;
  box-shadow: 0 5px 20px 1px rgba(0, 0, 0, 0.5);
  background-color: white;
  &:hover {
    background-color: darkblue;
  }
`;

const PokemonType = styled.div`
  position: relative;
  left: 0;
  top: 5px;
  margin: 5px 5px;
  height: 25px;
  width: 25px;
  float: left;
  border-radius: 50%;
  background-color: ${(props) => typeColors[props.type]};
`;

const Pokeimage = styled.img`
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-color: ${(props) => typeColors[props.type]};
  background-repeat: no-repeat;
  background-position: center;
  border: 0px solid transparent;
  margin-top: 5px;
  height: 50%;
  width: 90%;
`;

const PokemonName = styled.h3`
  position: relative;
  top: 10px;
  color: black;
`;

const Card = (props) => {
  const { image, name, type } = props;
  return (
    <CardContainer>
      <div style={{ position: "absolute" }}>
        {type.map((type, index) => (
          <PokemonType key={index} type={type} />
        ))}
      </div>
      <PokemonName>{name.toUpperCase()}</PokemonName>
      <Pokeimage image={image} type={type[0]} />
    </CardContainer>
  );
};

export default Card;
