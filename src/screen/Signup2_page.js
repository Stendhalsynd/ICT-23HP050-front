import React, { useState } from "react";
// import "../css/signup2_page.css"
import { Link } from "react-router-dom";
import Container from "../component/container/Container";
import Header from "../component/header/Header";
import Area from "../component/area/Area";
import Button from "../component/button/Button";
import Typography from "../component/typography/Typography";
import Divider from "../component/divider/Divider";

const SignUpPage2 = ({ form, children }) => {
  return (
    <Container flex>
      <Header signup2 paddingTop="56px" />

      <Area background="white" borderRadius="15px" top="7%" width="600px">
        <Button input justifyContent="flex-start" placeholder="이메일"></Button>
        <Button disabled marginTop="23px">
          <Typography disabled>인증코드 다시 보내기</Typography>
        </Button>
        <Divider margin="26px 0 0" />
        <Typography normal alignSelf="flex-start" marginTop="13px">
          이메일로 전송된 인증코드를 입력해주세요.
        </Typography>
        <Button
          input
          justifyContent="space-between"
          placeholder="인증코드 6자리 입력"
          marginTop="13px"
        >
          <Typography input> </Typography>
          <Typography normal>3:00</Typography>
        </Button>
        <Typography success alignSelf="flex-start" marginTop="14px">
          인증코드를 입력해주세요.
        </Typography>
        <Divider margin="12px 0 0" />
        <Button
          input
          justifyContent="flex-start"
          placeholder="비밀번호"
          marginTop="23px"
        ></Button>
        <Button
          input
          justifyContent="flex-start"
          placeholder="비밀번호 확인"
          marginTop="8px"
        ></Button>
        <Button
          input
          justifyContent="flex-start"
          placeholder="소속 입력"
          marginTop="29px"
        ></Button>
        <Link
          to={"/mainPage"}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button disabled marginTop="23px">
            <Typography disabled>회원가입 완료</Typography>
          </Button>
        </Link>
      </Area>
      {/* <div className="frame2">
        
      </div> */}
    </Container>
  );
};

export default SignUpPage2;
