import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledTypography = styled.div`
  font-family: ${(props) => props.fontFamily || "var(--font-Roboto)"};
  font-size: ${(props) => props.fontSize || "34px"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  line-height: ${(props) => props.lineHeight || "40px"};

  color: ${(props) => props.color || colors.white};
  text-align: ${(props) => props.textAlign || "center"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
`;

function Typography({ children, ...props }) {
  return <StyledTypography {...props}>{children}</StyledTypography>;
}

export default Typography;
