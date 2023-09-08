import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  border-radius: ${(props) => props.borderRadius || "20px"};
  border: ${(props) => props.border || "5px solid white"};
  position: relative;
  background: ${(props) => props.background || "transparent"};
  padding: ${(props) => props.padding || "52px 58px"};

  width: ${(props) => props.width || "50%"};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  margin: ${(props) => props.margin || "30vh 0"};
`;

function Area({ children, ...props }) {
  return <StyledArea {...props}>{children}</StyledArea>;
}

export default Area;
