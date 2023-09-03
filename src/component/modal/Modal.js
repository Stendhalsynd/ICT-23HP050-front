import styled, {css} from "styled-components";
import colors from "../../config/Colors";

const StyledModal = styled.Modal`
    border-radius: 12px;
    border: ${(props) => props.border};
    display: flex;
    width: 50%;
    height: 50%;
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
    padding: 10px; 20px;
    flex-direction: "row";
    justify-content: "center;
    align-content: "center";
    font: 500 14px normal var(--font -Roboto);
    line-height: 20px;

    color: ${(props) => props.color || color.white};

    flex-wrap : wrap;
`;


function Modal({ text, children, input, ...props }) {
  if (input) {
    return <Input type="text" {...props} />;
  } else {
    return <StyledModal {...props}>{text || children}</StyledModal>;
  }
}
export default Modal;
