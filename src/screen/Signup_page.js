import React, { useState } from "react";
import Header from "../component/header/Header";
import Form from "../component/form/Form";
import InputButton from "../component/button/InputButton";
import Button from "../component/button/Button";
import styled, { css } from "styled-components";
import colors from "../config/Colors";
import Typography from "../component/typography/Typography";
import { Link, useNavigate } from "react-router-dom";
import API from "../utils/Api";

const SignUpPage = ({ form, children }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    const email = e.target.value;
    setInputEmail(email);
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (email.length > 0 && !regExp.test(email))
      setMessage("이메일을 확인해주세요.");
    else if (email.length < 1 || regExp.test(email)) setMessage("");
  };

  const SendCode = async () => {
    if (!isCodeSent) {
      try {
        const response = await API.post("/v1/user/email", {
          email: inputEmail,
        });
        if (response.status === 200) {
          console.log(response.data);
          console.log("전송성공");
          navigate("/signUpPage2", { state: { email: inputEmail } });
        }
      } catch (e) {
        console.error(e);
        console.log(e.response);
      }
    }
  };

  return (
    <Container>
      <Header paddingTop="62px" />
      <Form height="60vh" marginTop="5vh">
        <InputButton
          type="text"
          placeholder="이메일"
          // value={inputEmail}
          onChange={handleEmail}
          width="40vw"
          height="100px"
          marginTop="20px"
        />
        <Button
          login
          width="45vw"
          height="7vh"
          marginTop="1vh"
          marginBottom="1.3vh"
          onClick={SendCode}
        >
          <Typography normal>인증코드 발송하기</Typography>
        </Button>
        <Typography
          fontSize="11px"
          lineHeight="20px"
          color={colors.red}
          marginTop="-20px"
        >
          {message}
        </Typography>
        <InputButton
          type="password"
          placeholder="비밀번호"
          width="40vw"
          height="50px"
        />
        <InputButton
          type="password"
          placeholder="비밀번호 확인"
          width="40vw"
          height="50px"
        />
        <Button
          disabled={true}
          width="45vw"
          height="7vh"
          marginTop="1vh"
          background={colors.btn_disabled}
        >
          <Typography normal>회원가입 완료</Typography>
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${colors.bg_default};
  align-items: center;
`;
export default SignUpPage;
