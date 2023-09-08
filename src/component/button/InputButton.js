import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledInputButton = styled.input`
    background-color: ${colors.btn_input}
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: 12px;
    padding: 1.4vw 2.4vw;
    display: flex;
    flex-direction: column;
    margin-top: ${(props) => props.marginTop || "0px"};
`;

function InputButton({ text, children, ...props }) {
  return <StyledInputButton {...props}>{text || children}</StyledInputButton>;
}
export default InputButton;
