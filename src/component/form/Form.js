import styled, { css } from "styled-components";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 60vw;
  height: ${(props) => props.height || "386px"};

  background: #ffffff;
  border-radius: 15px;

  /* font */
  font-family: var(--font-Roboto);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  margin-top: ${(props) => props.marginTop || "10vh"};
`;

function Form({ children, ...props }) {
  return <StyledForm {...props}>{children}</StyledForm>;
}

export default Form;
