import { styled } from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 350px;
  background-color: white;
  border-radius: 40px;
  border-width: 5px;
  border-color: var(--color-normal);
`;

export default function Dice() {
  return <Container></Container>;
}
