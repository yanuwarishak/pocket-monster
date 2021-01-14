import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/241ac6c8-2652-4791-85c1-c39d8957857e/damyy1w-d932cb5b-5d6b-4cf5-9306-a098e5544f25.jpg/v1/fill/w_1600,h_1357,q_75,strp/lavender_town_by_pumpkinoid_damyy1w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMzU3IiwicGF0aCI6IlwvZlwvMjQxYWM2YzgtMjY1Mi00NzkxLTg1YzEtYzM5ZDg5NTc4NTdlXC9kYW15eTF3LWQ5MzJjYjViLTVkNmItNGNmNS05MzA2LWEwOThlNTU0NGYyNS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xK9M9ZpMNf0ut5BV-qnH_pnnBM-XjSV-Pgr0_6xJZcM");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
  padding: 20px;
  margin: 10px;
  background-color: violet;
  border-radius: 10px;
  color: white;
`;

export const InfoText = styled.h1`
  text-transform: capitalize;
  margin: 0px 0px 5px 0px;
`;
