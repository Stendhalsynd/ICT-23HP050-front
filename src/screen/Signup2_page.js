import React from 'react';
import "../css/signup2_page.css"
import TokenButton from '../component/token_button';
import SignUpButton from '../component/signUp_button';
const signUpPage2 = ({form, children}) => {
  return (
 
    <div>
      <main>
        <h1 className="main_text2">AutoamateX</h1>

         <from className='frame2'>
          <input className='inputButton2' type="text" placeholder='이메일'></input>
          <TokenButton/>
          이메일로 전송된 인증코드를 입력해주세요.
          <input className='inputButton2' type="text" placeholder='인증코드 6자리 입력'></input>
          <input className='inputButton2' type="password" placeholder='비밀번호'></input>
          <input className='inputButton2' type="password" placeholder='비밀번호 확인'></input>
          <SignUpButton/>
        </from>

      </main>
    </div>
  );
};

export default signUpPage2;