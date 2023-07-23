import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: 20px;
  border: 5px solid ${colors.white};
  position: relative;

  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.height || "43%"};
`;

function Area({ children, ...props }) {
  return <StyledArea {...props}>{children}</StyledArea>;
}

export default Area;
