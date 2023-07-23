import styled, {css} from 'styled-components'

const StyledForm = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    width: 600px;
    height: ${(props) => props.height|| "386px"};
  
    background: #FFFFFF;
    border-radius: 15px;

    /* font */
    font-family: var(--font-Roboto);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    margin-left: 470px;
    margin-top:  ${(props) => props.marginTop|| "100px"};
`;

function Form({children,...props}) {
  return <StyledForm {...props}>
    {children}
  </StyledForm>
}

export default Form;