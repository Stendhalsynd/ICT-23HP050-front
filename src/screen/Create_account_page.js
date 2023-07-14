import React, {useState} from 'react';
import "../css/create_account_page.css";
import { Link } from 'react-router-dom';
import LoginButton from '../component/login_button';

const createAccountPage = ({ form, children }) => {
  /*const [inputId, setID] = useState("");
  const [inputPw, setPw] = useState("");

  const  = (e) => {
    if (setID(e.target.value) == null || setPw) {
      alert("아이디를 확인하세요.")
    }
  }*/
  

  return (
    <div >
      <main>
        <h1 className="main_text2">AutoamateX</h1>
  
        <form className='frame'>
          항만관리자를 위한 Automate X 에 오신 것을 환영합니다.
          <br /><br /><br />
          <input className='inputButton' type="text" placeholder='이메일'></input>
          <input className='inputButton' type="password" placeholder='비밀번호'></input>
          <br />
          <LoginButton/>
          <br />
          <Link to={'/SignUpPage'}>이메일로 회원가입</Link>
        </form>
      </main>
    </div>
  );
};

export default createAccountPage;