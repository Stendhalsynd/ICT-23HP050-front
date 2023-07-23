import React, {useState} from "react";
import Header from "../component/header/Header";
import Form from "../component/form/Form";
import InputButton from "../component/button/InputButton";
import Button from "../component/button/Button";
import Typography from "../component/typography/Typography";
import styled, {css} from "styled-components";
import colors from "../config/Colors";
import { Link } from "react-router-dom";

const CreateAccountPage = ({ form, children }) => {
 
  const [inputId, setId] = useState("");
  const [inputPw, setPw] = useState("");
  const [idMessage, setIdMessage] = useState("|  아이디를 입력하세요.  |");
  const [pwMessage, setPwMessage] = useState("  비밀번호를 입력하세요.  |");

  const handleInputId = (e) => {
    const id = e.target.value
    setId(id) 
    if (id.length > 0)
      setIdMessage("|  아이디가 입력되었습니다.  |")
    else if (id.length < 1)
      setIdMessage("|  아이디를 입력하세요.  |")
  }

  const handleInputPw = (e) => {
    const pw = e.target.value
    setPw(pw)
    if (pw.length > 0) {
      setPwMessage("  비밀번호가 입력되었습니다.  |")
    }
    else if (pw.length < 1) {
      setPwMessage("  비밀번호를 입력하세요.  |")
    }
      
  }
  

  return (

    <Container>
      <Header paddingTop="62px"/>

      <Form>
        <Typography fontSize="16px" lineHeight="20px" color= {colors.black} marginTop="10px">항만관리자를 위한 Automate X 에 오신 것을 환영합니다.</Typography>
        <InputButton type="text" placeholder='이메일' value={inputId} onChange={handleInputId} width="440px" height="100px" marginTop= "20px"/>
        <InputButton type="password" placeholder='비밀번호' value={inputPw} onChange={handleInputPw} width="440px" height="50px"/>
        <Typography fontSize="13px" lineHeight="20px" color= {colors.red}>{idMessage}{pwMessage}</Typography>
        <Button login width="484px" height="50px" marginTop="20px">로그인</Button>
        <Link to={'/SignUpPage'} style={{textDecoration: "none"}}>
          이메일로 회원가입
        </Link>
      </Form>

    </Container>
  )
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${colors.bg_default}
`;

export default CreateAccountPage;