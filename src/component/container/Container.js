import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.background || colors.bg_default};
  height: ${(props) => props.height};

  ${(props) =>
    props.flex &&
    css`
      justify-content: center;
      align-items: center;
    `};
`;

function Container({ children, ...props }) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}

export default Container;
