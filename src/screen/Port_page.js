import colors from "../config/Colors";
import Header from "../component/header/Header";
import styled from "styled-components";
import Container from "../component/container/Container";
import Menu from "../component/menu/Menu";
import Button from "../component/button/Button";

const PortPage = () => {
  return (
    <StyledCoverContainer>
      <StyledHeader />
      <Menu />
      <div
        style={{
          position: "absolute",
          right: "3vw",
          bottom: "3vh",
          width: "30vw",
        }}
      >
        <Button>AutomateX GPT</Button>
      </div>
    </StyledCoverContainer>
  );
};

export default PortPage;

const StyledCoverContainer = styled(Container)`
  position: relative;
  display: flex;
  height: 100vh;
  background: ${(props) => props.background || colors.bg_default};
`;

const StyledHeader = styled(Header)`
  padding-top: 12vh;
  font: normal 400 8vw var(--font-Aldrich);
`;
