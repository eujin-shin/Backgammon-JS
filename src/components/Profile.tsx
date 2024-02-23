import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { B_BEIGE, B_BROWN, B_DARK, B_LIGHT } from "@/styles/GlobalColor";
import { faDesktop, faUser } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
`;

const IconDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${B_BEIGE};
`;

const Name = styled.span`
  margin: 0 10px;
  font-family: comfortaa;
  font-size: 22px;
  font-weight: 600;
  color: ${B_BEIGE};
`;

const Current = styled.div`
  position: absolute;

  width: 15px;
  height: 15px;
  background-color: #ad5e5e;
  border-radius: 100%;
`;

export function CompProfile() {
  return (
    <Wrapper style={{ alignSelf: "flex-start" }}>
      <IconDiv>
        <Current style={{ top: "-1px", left: "1px" }} />
        <FontAwesomeIcon
          icon={faDesktop}
          style={{ color: B_LIGHT }}
          size="2x"
        />
      </IconDiv>
      <Name>Computer</Name>
    </Wrapper>
  );
}

export function UserProfile() {
  return (
    <Wrapper style={{ alignSelf: "flex-end" }}>
      <Name>You</Name>
      <IconDiv>
        <Current style={{ top: "-1px", right: "1px" }} />
        <FontAwesomeIcon icon={faUser} style={{ color: B_DARK }} size="2x" />
      </IconDiv>
    </Wrapper>
  );
}
