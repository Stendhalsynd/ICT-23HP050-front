import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultPage from './screen/Default_page';
import CreateAccountPage from './screen/Create_account_page';
import signUpPage from './screen/Signup_page';
import signUpPage2 from './screen/Signup2_page';

function App() {
  return (
    <BrowserRouter>
      <div>
        <DefaultPage/>
        <Routes>
            <Route path='/defaultPage' Component={DefaultPage}/>
            <Route path='/createAccountPage' Component={CreateAccountPage}/>
            <Route path='/signUpPage' Component={signUpPage}/>
            <Route path='/signUpPage2' Component={signUpPage2}/>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
