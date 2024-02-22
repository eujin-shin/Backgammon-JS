import { styled } from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 40px;
  border-width: 5px;
  border-color: var(--color-normal);

  width: 100%;
  padding-bottom: 100%;

  @media screen and (min-width: 900px) {
    width: 450px;
    height: 450px;
  }
`;

export default function Board() {
  return <Container></Container>;
}
