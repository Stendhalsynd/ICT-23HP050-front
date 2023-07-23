import React, {useState} from "react";
import Header from "../component/header/Header";
import Form from "../component/form/Form";
import InputButton from "../component/button/InputButton";
import Button from "../component/button/Button";
import styled, {css} from "styled-components";
import colors from "../config/Colors";
import Typography from "../component/typography/Typography";
import { Link } from "react-router-dom";
const SignUpPage = ({form, children}) => {

  const [inputEmail, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e) => {
    const email = e.target.value
    setEmail(email)
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    if (email.length > 0 && !regExp.test(email))
      setMessage("이메일을 확인해주세요.")
    else if (email.length < 1 || regExp.test(email))
      setMessage("")
  }



  return (
   <Container>
      <Header paddingTop="62px"/>
      <Form height="480px" marginTop="30px">
        <InputButton type="text" placeholder='이메일' value={inputEmail} onChange={handleEmail} width="440px" height="100px" marginTop= "20px"/>
        <Link to={'/SignUpPage2'} style={{textDecoration: "none"}}>
          <Button login width="484px" height="50px" marginTop="20px">인증코드 발송하기</Button>
        </Link>
        <Typography fontSize="11px" lineHeight="20px" color= {colors.red} marginTop="-20px">{message}</Typography>
        <InputButton type="password" placeholder='비밀번호' width="440px" height="50px"/>
        <InputButton type="password" placeholder='비밀번호 확인' width="440px" height="50px"/>
        <Button disabled={true} width="484px" height="50px" marginTop="20px" background={colors.btn_disabled}>회원가입 완료</Button>
      </Form>
   </Container>
    ); 
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${colors.bg_default}
`;
export default SignUpPage;