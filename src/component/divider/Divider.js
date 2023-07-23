import styled, { css } from "styled-components";
import colors from "../../config/Colors";

const StyledDivider = styled.div`
  height: 1.5px;
  background: ${colors.gray};
  width: 100%;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

const Divider = ({ ...props }) => {
  return <StyledDivider {...props} />;
};

export default Divider;
