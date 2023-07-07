import React from 'react';
import "../css/default.css"
import { Link } from 'react-router-dom';
const signUpPage = ({form, children}) => {
  return (
    <main>
    <body>
    <header>
      <h1 className="main_text2">AutoamateX</h1>
      <div className='frame2'>
          <input className='inputButton' type="text" placeholder='이메일'></input>
          <br/>
          <Link to={'/signUpPage2'}><button className='loginButton'>인증코드 발송하기</button></Link>
          <br/>
          <input className='inputButton' type="password" placeholder='비밀번호'></input>
          <input className='inputButton' type="password" placeholder='비밀번호 확인'></input>
          <br/>          
          <button className='inoperativeButton'>회원가입완료</button>
        </div>
    </header>
    </body>
  </main>
  );
};

export default signUpPage;