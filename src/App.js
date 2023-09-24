import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultPage from "./screen/Default_page";
import CreateAccountPage from "./screen/Create_account_page";
import signUpPage from "./screen/Signup_page";
import SignUpPage2 from "./screen/Signup2_page";
import MainPage from "./screen/main_page";
import ViolationPage from "./screen/Violation_page";
import PortPage from "./screen/Port_page";

// import {
//   CreateAccountPage,
//   MainPage,
//   PortPage,
//   SignUpPage,
//   SignUpPage2,
//   ViolationPage,
//   defaultPage,
// } from "./screen";

import { Reset } from "styled-reset";

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <div>
        <Routes>
          <Route path="/" Component={DefaultPage} />
          <Route path="/createAccountPage" Component={CreateAccountPage} />
          <Route path="/signUpPage" Component={signUpPage} />
          <Route path="/signUpPage2" Component={SignUpPage2} />
          <Route path="/mainPage" Component={MainPage} />
          <Route path="/violationPage" Component={ViolationPage} />
          <Route path="/portPage" Component={PortPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
