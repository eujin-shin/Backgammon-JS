import { B_LIGHT } from "@/styles/GlobalColor";
import styled from "styled-components";

interface ModalProps {
  value: string;
  handleClose: () => void;
}

const Container = styled.div`
  display: flex;
  background-color: var(--color-normal);
  border-radius: 40px;

  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    height: 200px;
    padding-top: 30%;
    padding-bottom: 30%;
    padding-inline: 20%;
  }
`;

export default function InfoModal({ value, handleClose }: ModalProps) {
  return (
    <Container>
      <span
        style={{
          fontFamily: "comfortaa",
          color: B_LIGHT,
          fontWeight: 600,
          fontSize: 20,
        }}
      >
        {value}
      </span>
    </Container>
  );
}
