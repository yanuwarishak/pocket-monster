import React, { useState } from "react";

import {
  FormContainer,
  FormOverlay,
  CardContainer,
  // CardText,
  Form,
} from "./nickname-form.styles";

const NicknameForm = ({ show, handleClose, pokemonOwned }) => {
  let existingNickname = pokemonOwned.filter((pokemon) => pokemon.nickname);
  const display = show ? { display: "flex" } : { display: "none" };

  const [nickname, setNickname] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    event.target.value = "";
    if (existingNickname.indexOf(nickname) === -1 && nickname !== "") {
      alert(`Submitting Name ${nickname}`);
      handleClose();
    }
    if (existingNickname.indexOf(nickname) !== -1 || nickname === "") {
      alert(`Nickname Invalid`);
      setNickname("");
    }
    setNickname("");
  };

  return (
    <FormContainer style={display}>
      <FormOverlay>
        <CardContainer>
          <Form onSubmit={formHandler}>
            <p>Enter Your Pokemon Nickname</p>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </Form>
        </CardContainer>
      </FormOverlay>
    </FormContainer>
  );
};

export default NicknameForm;
