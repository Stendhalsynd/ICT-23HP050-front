import styled, {css} from 'styled-components'
import colors from '../../config/Colors';

const StyledButton = styled.button`
  border-radius: 12px;
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  matgin-left: ${(props) => props.marginLeft};
  padding: 10px, 20px;
  justify-content: center;
  align-content: center;
  font: 500 14px normal var(--font-Roboto); // font-weight font-size font-style font-family
  line-height: 20px;
  cursor: pointer;
  z-index: 1;

  color: ${(props) => props.color || colors.white};
  background: ${(props) => props.background || colors.btn_default};
  
  ${(props) => props.input && css `
    justify-content: flex-start;
    background: ${colors.white};
    border: 0.7px solid ${colors.black};
    color: ${colors.gray};
    font: 400 16px normal; // font-weight font-size font-style
  `};

  ${(props) => props.login && css `
    padding-top: 12px; 
    margin-bottom: 20px;
    font: 500 14px normal; // font-weight font-size font-style
  `};

  ${(props) => props.disabled && css `
    padding-top: 12px; 
    margin-bottom: 20px;
    font: 500 14px normal; // font-weight font-size font-style
  `};
`;

function Button({text, children, ...props}) {
  return <StyledButton {...props}>
    {text || children}
  </StyledButton>;
}
export default Button;