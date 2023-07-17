import styled, {css} from 'styled-components'
import colors from '../../config/Colors';

const StyledArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 20px;
  border: 5px solid ${colors.white};
  
  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.height || "50%"}
`;

function Area({children, ...props}) {
  return <StyledArea {...props}>
    <img src={'/img/warning_amber.png'} style={{width: '50px', height: '50px'}} ></img>
    {children}
  </StyledArea>;
}

export default Area;