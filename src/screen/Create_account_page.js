import React, { useState, useEffect } from "react";
import Header from "../component/header/Header";
import Form from "../component/form/Form";
import InputButton from "../component/button/InputButton";
import Button from "../component/button/Button";
import Typography from "../component/typography/Typography";
import styled from "styled-components";
import colors from "../config/Colors";
import { Link, useNavigate } from "react-router-dom";
import API from "../utils/Api";

const CreateAccountPage = () => {
  const [inputId, setId] = useState("");
  const [inputPw, setPw] = useState("");
  const [idMessage, setIdMessage] = useState("|  아이디를 입력하세요.  |");
  const [pwMessage, setPwMessage] = useState("  비밀번호를 입력하세요.  |");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputId = (e) => {
    const id = e.target.value;
    setId(id);
    setUser((prevState) => {
      return { ...prevState, email: e.target.value };
    });
    if (id.length > 0) {
      setIdMessage("|  아이디가 입력되었습니다.  |");
    } else if (id.length < 1) setIdMessage("|  아이디를 입력하세요.  |");
  };

  const handleInputPw = (e) => {
    const pw = e.target.value;
    setPw(pw);
    setUser((prevState) => {
      return { ...prevState, password: e.target.value };
    });
    if (pw.length > 0) {
      setPwMessage("  비밀번호가 입력되었습니다.  |");
    } else if (pw.length < 1) {
      setPwMessage("  비밀번호를 입력하세요.  |");
    }
    console.log(user.email);
    console.log(user.password);
  };

  const SubmitLogin = (e) => {
    e.preventDefault();

    API.post("/v1/user/login", user)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.jwtToken);
          console.log("로그인 성공");
          const token = response.data.jwtToken;
          localStorage.setItem("jwtToken", token);
          console.log("저장된 토큰" + localStorage.getItem("jwtToken"));
          navigate("/mainPage");
        }
      })
      .catch((error) => {
        console.log(error.response);
        console.log("로그인 실패");
      });
  };

  return (
    <Container>
      <Header paddingTop="62px" />

      <Form>
        <Typography
          fontSize="16px"
          lineHeight="20px"
          color={colors.black}
          marginTop="10px"
        >
          항만관리자를 위한 Automate X 에 오신 것을 환영합니다.
        </Typography>
        <InputButton
          type="text"
          placeholder="이메일"
          value={inputId}
          onChange={handleInputId}
          width="40vw"
          height="100px"
          marginTop="20px"
        />
        <InputButton
          type="password"
          placeholder="비밀번호"
          value={inputPw}
          onChange={handleInputPw}
          width="40vw"
          height="50px"
        />
        <Typography fontSize="13px" lineHeight="20px" color={colors.red}>
          {idMessage}
          {pwMessage}
        </Typography>
        <Button
          width="45vw"
          height="50px"
          marginTop="20px"
          onClick={SubmitLogin}
        >
          로그인
        </Button>
        <Link to={"/SignUpPage"} style={{ textDecoration: "none" }}>
          이메일로 회원가입
        </Link>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${colors.bg_default};
  align-items: center;
  padding-bottom: 20vh;
`;

export default CreateAccountPage;
