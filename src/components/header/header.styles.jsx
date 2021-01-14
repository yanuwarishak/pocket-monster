import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import mediaQuery from "../../media-queries/media-queries";

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100vw;
  box-sizing: border-box;
  background-color: whitesmoke;
  box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  ${mediaQuery("md")} {
    position: fixed;
    bottom: 0;
    top: unset;
  }
`;

export const StyledLink = styled(NavLink)`
  user-select: none;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-weight: bold;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const NavIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const MyPokemonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const MyPokemon = styled.h3`
  font-size: 12px;
  margin: 0px;
  margin-left: 10px;
  color: black;
  background-color: wheat;
  border-radius: 50%;
  padding: 5px 10px;
  ${mediaQuery("md")} {
    margin: 0;
    margin-left: 2px;
    padding: 0px 5px;
  }
`;

export const IconName = styled.p`
  margin: 0;
  font-size: 12px;
  align-self: flex-end;
`;
