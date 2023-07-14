import React from 'react';
import "../css/signup_page.css"
import { Link } from 'react-router-dom';
import TokenButton from '../component/token_button';
import SignUpButton from '../component/signUp_button';
const signUpPage = ({form, children}) => {
  return (
    <div>
      <main>
        <h1 className="main_text2">AutoamateX</h1>

        <form className='frame2'>
          <input className='inputButton2' type="text" placeholder='이메일'></input>
          <br/>
          <Link to={'/signUpPage2'}><TokenButton/></Link>
          <br/>
          <input className='inputButton2' type="password" placeholder='비밀번호'></input>
          <input className='inputButton2' type="password" placeholder='비밀번호 확인'></input>
          <br/>          
          <Link to={'/createAccountPage'}><SignUpButton/></Link>
        </form> 
        
      </main>
    </div>  
  );
};

export default signUpPage;