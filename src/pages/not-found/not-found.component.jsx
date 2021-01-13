import React from "react";
import { Container, TextContainer } from "./not-found.styles";

const NotFound = () => (
  <Container>
    <TextContainer>
      <h1>404</h1>
      <h2>The Pokemon you're looking for isn't here</h2>
    </TextContainer>
  </Container>
);

export default NotFound;
