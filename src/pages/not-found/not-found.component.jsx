import React from "react";
import { Container, InfoText, TextContainer } from "./not-found.styles";

const NotFound = ({ name }) => {
  let errorElement = name || "404";
  let errorMsg = name
    ? "The Pokemon you're looking for haven't discovered yet"
    : "Looks like you got lost in Lavender Town, let's go back home";
  return (
    <Container>
      <TextContainer>
        <InfoText>{errorElement}</InfoText>
        <h1 style={{ margin: "0px" }}>Not Found</h1>
        <h2>{errorMsg}</h2>
      </TextContainer>
    </Container>
  );
};

export default NotFound;
