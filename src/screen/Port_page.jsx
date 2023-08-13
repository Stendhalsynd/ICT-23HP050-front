import { Button, Container, Header, Menu } from "../component";

import styled from "styled-components";
import colors from "../config/Colors";

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
