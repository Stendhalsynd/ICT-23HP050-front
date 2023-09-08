import React, { useState, useEffect, useRef } from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//mport { useLocation } from "react-router";
// import "../css/signup2_page.css"
import { Link, useNavigate, useLocation } from "react-router-dom";
import Container from "../component/container/Container";
import Header from "../component/header/Header";
import Area from "../component/area/Area";
import Button from "../component/button/Button";
import Typography from "../component/typography/Typography";
import colors from "../config/Colors";
import Divider from "../component/divider/Divider";
import API from "../utils/Api";

const SignUpPage2 = ({ form, children }) => {
  const location = useLocation();
  const inputEmail = location.state.email;
  const [inputCode, setCode] = useState("");
  const [inputName, setName] = useState("");
  const [inputPW1, setPW1] = useState("");
  const [inputPW2, setPW2] = useState("");
  const [inputRole, setRole] = useState("");

  const [isVerify, setIsVerify] = useState(false);

  const [pwVerifyMessage, setpwVerifyMessage] =
    useState("비밀번호를 입력하세요");

  const btnActive = useRef(false);
  const btnCodeActive = useRef(false);

  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  const navigate = useNavigate();

  // 이거 다시 하기~
  const [join, setJoin] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          btnCodeActive.current = true;
          console.log(btnCodeActive.current);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const handleCode = (e) => {
    const code = e.target.value;
    setCode(code);
  };

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
    setJoin((prevState) => {
      return { ...prevState, name: e.target.value, email: inputEmail };
    });
  };

  const handlePW1 = (e) => {
    const pw = e.target.value;
    setPW1(pw);
    if (pw.length < 1) {
      setpwVerifyMessage(" 비밀번호를 입력하세요. ");
    } else if (pw.length > 0) {
      setpwVerifyMessage(" 비밀번호가 동일하지 않습니다. ");
    }
  };

  const handlePW2 = (e) => {
    const pw2 = e.target.value;
    setPW2(pw2);
    setJoin((prevState) => {
      return { ...prevState, password: e.target.value };
    });

    if (inputPW1 == pw2) {
      setpwVerifyMessage(" 비밀번호가 동일합니다. ");
    } else {
      setpwVerifyMessage(" 비밀번호가 동일하지 않습니다. ");
    }
  };

  const handleRole = (e) => {
    const role = e.target.value;
    setRole(role);
    setJoin((prevState) => {
      return { ...prevState, role: e.target.value };
    });
  };

  const Verify = async () => {
    if (!isVerify) {
      try {
        const response = await API.post("/v1/user/verify", {
          epw: inputCode,
        });
        if (response.status === 200) {
          console.log(response.data);
          console.log("확인성공");
          console.log(btnActive.current);
          btnActive.current = true;
          console.log(btnActive.current);
        }
      } catch (e) {
        console.error(e);
        console.log(e.response);
      }
    }
  };

  const SubmitJoin = async () => {
    console.log(join);
    if (!isVerify) {
      try {
        const response = await API.post("/v1/user/join", join);
        if (response.status === 200) {
          console.log(response.data.token);
          console.log("회원가입 성공");
          //const token = response.dsata.token;
          //토큰 저장해줘야함
          navigate("/mainPage");
        }
      } catch (e) {
        console.error(e);
        console.log(e.response);
      }
    }
  };

  return (
    <Container flex>
      <Header signup2 paddingTop="56px" />

      <Area
        background="white"
        borderRadius="15px"
        marginTop="25vh"
        width="50vw"
        padding="4vw 6vw"
      >
        <Button input justifyContent="flex-start" placeholder="이메일"></Button>
        <Link
          to="/signUpPage"
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            background={
              btnCodeActive.current ? colors.btn_default : colors.bg_disabled
            }
            border={btnCodeActive.current ? colors.btn_default : "none"}
            marginTop="2.4vh"
          >
            <Typography disabled>인증코드 다시 보내기</Typography>
          </Button>
        </Link>

        <Divider margin="2vh 0 0" />
        <Typography normal alignSelf="flex-start" marginTop="13px">
          이메일로 전송된 인증코드를 입력해주세요.
        </Typography>
        <Button
          input
          justifyContent="space-between"
          placeholder="인증코드 6자리 입력"
          marginTop="13px"
          onChange={handleCode}
        ></Button>
        <Typography success alignSelf="flex-start" marginTop="14px">
          {" "}
          인증코드를 입력해주세요.{" "}
          <span style={{ color: "red" }} marginTop="14px">
            [ {minutes}:{seconds < 10 ? `0${seconds}` : seconds} ]
          </span>
        </Typography>
        <Button login onClick={Verify}>
          <Typography disabled> 인증코드 확인하기 </Typography>
        </Button>
        <Divider margin="2vh 0 0" />
        <Button
          input
          justifyContent="flex-start"
          placeholder="이름"
          marginTop="23px"
          onChange={handleName}
        ></Button>
        <Button
          input
          justifyContent="flex-start"
          placeholder="비밀번호"
          marginTop="23px"
          onChange={handlePW1}
        ></Button>
        <Button
          input
          justifyContent="flex-start"
          placeholder="비밀번호 확인"
          marginTop="8px"
          onChange={handlePW2}
        ></Button>
        <Typography red font="1.2vw" alignSelf="flex-start" marginTop="14px">
          {pwVerifyMessage}
        </Typography>

        <Button
          input
          type="text"
          justifyContent="flex-start"
          placeholder="소속 입력"
          marginTop="2vh"
          list="role"
          onChange={handleRole}
        />
        <datalist id="role">
          <option value="ULHMC" label="울산항만공사" />
          <option value="OPERATOR1" label="신흥사" />
          <option value="OPERATOR2" label="고려항만" />
          <option value="OPERATOR3" label="울산항만운영" />
          <option value="OPERATOR4" label="한국보팔터미널" />
        </datalist>

        <Button
          background={
            btnActive.current ? colors.btn_default : colors.bg_disabled
          }
          border={btnActive.current ? colors.btn_default : "none"}
          marginTop="23px"
          onClick={SubmitJoin}
        >
          <Typography disabled>회원가입 완료</Typography>
        </Button>
      </Area>
    </Container>
  );
};

export default SignUpPage2;
