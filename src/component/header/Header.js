import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledHeader = styled.header`
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: ${colors.black};
  font: normal 400 96px var(--font-Aldrich); // font-style font-weight font-size font-family
  padding-top: ${(props) => props.paddingTop};
  z-index: 1;

  ${(props) =>
    props.main &&
    css`
      color: ${colors.white};
    `};
`;

const Signup2Header = styled.header`
  position: absolute;
  display: block;
  top: 0;
  color: ${colors.black};

  font: normal 400 96px var(--font-Aldrich); // font-style font-weight font-size font-family
  padding-top: ${(props) => props.paddingTop};
  z-index: 1;

  width: 100%;
  text-align: center;
  top: 0;

  ${(props) =>
    props.main &&
    css`
      color: ${colors.white};
    `};
`;

function Header({ signup2, ...props }) {
  if (signup2) {
    return (
      <Signup2Header {...props}>
        <h1>AutomateX</h1>
      </Signup2Header>
    );
  } else {
    return <StyledHeader {...props}>AutomateX</StyledHeader>;
  }
}

export default Header;
