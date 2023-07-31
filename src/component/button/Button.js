import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledButton = styled.button`
  border-radius: 12px;
  display: flex;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  matgin-left: ${(props) => props.marginLeft};
  padding: 10px 20px;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-content: ${(props) => props.alignContent || "center"};
  font: 500 14px normal var(--font-Roboto); // font-weight font-size font-style font-family
  line-height: 20px;

  cursor: pointer;
  z-index: 1;

  color: ${(props) => props.color || colors.white};
  background: ${(props) => props.background || colors.btn_default};

  flex-wrap: wrap;

  ${(props) =>
    props.input &&
    css`
      justify-content: flex-start;
      background: ${colors.white};
      border: 0.7px solid ${colors.black};
      color: ${colors.gray};
      font: 400 16px normal; // font-weight font-size font-style
      placeholder: ${(props) => props.placeholder};
    `};

  ${(props) =>
    props.login &&
    css`
      padding-top: 12px;
      margin-bottom: 20px;
      font: 500 14px normal; // font-weight font-size font-style
      onClick: ${props.onClick};
    `};

  ${(props) =>
    props.disabled &&
    css`
      background: ${colors.bg_disabled};
      border: none;
      padding-top: 12px;
      margin-bottom: 20px;
      color: ${colors.white};
      font: 500 14px normal; // font-weight font-size font-style
    `};
`;

const Input = styled.input`
  padding: 10px 20px;
  border: 0.7px solid ${colors.black};
  border-radius: 12px;
  background: ${colors.white};

  // 버튼 내부의 입력 요소의 색상을 지정합니다.
  color: ${colors.gray};

  // 기본적으로 입력 요소는 버튼과 동일한 너비를 가지도록 합니다.
  width: 100%;
  font: 400 16px normal; // font-weight font-size font-style
  line-height: 20px;
  box-sizing: border-box;
  margin-top: ${(props) => props.marginTop};
`;

function Button({ text, children, input, ...props }) {
  if (input) {
    return <Input type="text" {...props} />;
  } else {
    return <StyledButton {...props}>{text || children}</StyledButton>;
  }
}
export default Button;
