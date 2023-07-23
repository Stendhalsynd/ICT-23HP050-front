import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledTypography = styled.div`
  font-family: ${(props) => props.fontFamily || "var(--font-Roboto)"};
  font-size: ${(props) => props.fontSize || "34px"};
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: ${(props) => props.lineHeight || "40px"};

  color: ${(props) => props.color || colors.white};
  text-align: ${(props) => props.textAlign || "center"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  align-self: ${(props) => props.alignSelf};

  ${(props) =>
    props.normal &&
    css`
      color: ${colors.black};
      font: 400 16px normal; // font-weight font-size font-style
    `};

  ${(props) =>
    props.success &&
    css`
      color: ${colors.green};
      font: 400 16px normal; // font-weight font-size font-style
    `};

  ${(props) =>
    props.input &&
    css`
      color: ${colors.gray};
      font: 400 16px normal; // font-weight font-size font-style
      line-height: 20px;
    `};

  ${(props) =>
    props.disabled &&
    css`
      color: ${colors.white};
      font: 500 14px normal; // font-weight font-size font-style
      line-height: 20px;
    `};
`;

function Typography({ children, ...props }) {
  return <StyledTypography {...props}>{children}</StyledTypography>;
}

export default Typography;
