import React from 'react';
import "../css/default.css"
import { Link } from 'react-router-dom';
const signUpPage2 = ({form, children}) => {
  return (
    <main>
    <body>
    <header>
      <h1 className="main_text2">AutoamateX</h1>
      <div className='frame'>
          <input className='inputButton' type="text" placeholder='이메일'></input>
          <button className='loginButton'>인증코드 발송하기</button>
          <input className='inputButton' type="password" placeholder='비밀번호'></input>
          <input className='inputButton' type="password" placeholder='비밀번호 확인'></input>
          <button className='inoperativeButton'>회원가입완료</button>
        </div>
    </header>
    </body>
  </main>
  );
};

export default signUpPage2;