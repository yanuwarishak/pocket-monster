import React from "react";

import { ButtonContainer, ButtonText } from "./release-button.styles";

const ReleaseButton = ({ releasePokemon }) => {
  return (
    <ButtonContainer onClick={releasePokemon}>
      <ButtonText>Release</ButtonText>
    </ButtonContainer>
  );
};

export default ReleaseButton;
