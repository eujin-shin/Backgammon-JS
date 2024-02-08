import { styled } from "styled-components";

const Container = styled.div`
  width: 450px;
  height: 450px;
  background-color: white;
  border-radius: 40px;
  border-width: 5px;
  border-color: var(--color-normal);
`;

export default function Board() {
  return <Container></Container>;
}
