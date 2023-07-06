import React from 'react';
import "../css/default.css"
import { Link } from 'react-router-dom';
const createAccountPage = ({form, children}) => {
  return (
    <main>
    <body>
    <header>
      <h1 className="main_text2">AutoamateX</h1>
        <div className='frame'>
          항만관리자를 위한 Automate X 에 오신 것을 환영합니다.
          <br/><br/><br/>
          <input className='inputButton' type="text" placeholder='이메일'></input>
          <input className='inputButton' type="password" placeholder='비밀번호'></input>
          <br/>
          <button className='loginButton'>로그인</button>
          <br/>
          <Link to={'/SignUpPage'}>이메일로 회원가입</Link>
        </div>
    </header>
    </body>
  </main>
  );
};

export default createAccountPage;