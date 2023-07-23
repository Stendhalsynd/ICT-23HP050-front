import styled, {css} from 'styled-components'

const StyledSection = styled.div`
  flex: 1;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  ${(props) => props.left && css `
    background-image: url('/img/main_left.png');
    left: 0;
    right: 50%;
  `};

  ${(props) => props.right && css `
    background-image: url('/img/main_right.png');
    left: 50%;
    width: 50vw;
  `};
`;

function Section({children,...props}) {
  return <StyledSection {...props}>
    {children}
  </StyledSection>
}

export default Section;