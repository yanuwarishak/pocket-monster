import React from "react";
import {
  ModalContainer,
  ModalOverlay,
  CardContainer,
  CardText,
} from "./catch-failed.styles";

const CatchFailed = ({ show, handleClose }) => {
  const display = show ? { display: "flex" } : { display: "none" };
  return (
    <ModalContainer style={display}>
      <ModalOverlay onClick={handleClose}>
        <CardContainer>
          <CardText>It ran away...</CardText>
        </CardContainer>
      </ModalOverlay>
    </ModalContainer>
  );
};

export default CatchFailed;
