import styled from "@emotion/styled";

export const Card = styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  margin: 10px;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  background-color: blue;
  &:hover {
    background-color: darkblue;
  }
`;
