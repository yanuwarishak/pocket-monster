import styled from "@emotion/styled";
import { typeColors } from "../pokemon-type/pokemon-type.styles";
import mediaQuery from "../../media-queries/media-queries";

export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormOverlay = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
`;

export const CardContainer = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  width: 325px;
  height: 525px;
`;

export const CardText = styled.h3`
  font-size: 20px;
  color: #000;
`;

export const Form = styled.form`
  display: flex;
  position: relative;
  bottom: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Submit = styled.input`
  cursor: pointer;
  background-color: #00ff00;
  color: black;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px;
  outline: none;
  border: none;
  text-align: center;
  border-radius: 10px;
  margin: 20px 0px 0px 0px;
`;

export const CaughtText = styled.p`
  text-transform: capitalize;
  user-select: none;
  font-size: 24px;
  margin: 0px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const FormLabel = styled.p`
  color: ${(props) => (props.invalid ? "red" : "black")};
  user-select: none;
  font-size: 14px;
  margin-bottom: 6px;
  text-align: center;
  align-self: center;
`;

export const TextInput = styled.input`
  border: ${(props) => (props.invalid ? "2px solid red" : "2px solid")};
  border-radius: 5px;
  width: 80%;
  padding: 5px;
`;

export const CloseButton = styled.div`
  display: flex;
  position: relative;
  left: 10px;
  bottom: 30px;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 38px;
  margin: 0px;
  text-align: center;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
`;
