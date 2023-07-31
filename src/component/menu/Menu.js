import styled, { css } from "styled-components";

const StyledMenu = styled.div`
  position: absolute;
  padding-top: ${(props) => props.paddingTop || "8vh"};
  padding-left: ${(props) => props.paddingLeft || "3vw"};
  padding-right: ${(props) => props.paddingRight || "3vw"};
  display: flex;
  flex-direction: row;
  width: 100vw;
  box-sizing: border-box;
  // justify-content: space-between;
  /* 조건부로 justify-content 설정 */
  ${(props) =>
    props.left
      ? css`
          justify-content: flex-start;
        `
      : props.right
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: space-between;
        `}
`;

function Menu({ children, ...props }) {
  if (props.left || props.right) {
    return (
      <StyledMenu {...props}>
        {/* left 프롭스가 true인 경우, 앞쪽 이미지를 왼쪽에 표시 */}
        {props.left && (
          <img
            src={"/img/arrow_back_ios.png"}
            style={{ width: "3vw", height: "3vw", display: "inline-block" }}
            alt="뒤로 가기"
          />
        )}
        {/* right 프롭스가 true인 경우, 뒤쪽 이미지를 오른쪽에 표시 */}
        {props.right && (
          <img
            src={"/img/logout_icon.png"}
            style={{ width: "3vw", height: "3vw", display: "inline-block" }}
            alt="로그아웃"
          />
        )}
      </StyledMenu>
    );
  } else {
    return (
      <StyledMenu {...props}>
        <img
          src={"/img/arrow_back_ios.png"}
          style={{ width: "3vw", height: "3vw", display: "inline-block" }}
          alt="뒤로가기"
        ></img>
        <img
          src={"/img/logout_icon.png"}
          style={{ width: "3vw", height: "3vw", display: "inline-block" }}
          alt="로그아웃"
        ></img>
      </StyledMenu>
    );
  }
}

export default Menu;
