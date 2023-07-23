import styled, {css} from 'styled-components'
import colors from '../../config/Colors';

const StyledHeader = styled.header`
  
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: ${colors.black};
  font: normal 400 96px var(--font-Aldrich); // font-style font-weight font-size font-family
  padding-top: ${(props) => props.paddingTop};
  z-index: 1;
  
  ${(props) => props.main && css `
    color: ${colors.white};
  `};

`;

function Header({...props}) {
  return <StyledHeader {...props}>
    AutomateX
  </StyledHeader>;
}

export default Header;