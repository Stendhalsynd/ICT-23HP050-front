import React from "react";
import "../css/default_page.css";
import { Link } from "react-router-dom";
const defaultPage = ({ form, children }) => {
  return (
    <>
      <div className="main_container">
        {/* <h1>AutomateX</h1> */}
        <h1 className="main_text">AutoamateX</h1>
        <Link to={"/CreateAccountPage"}>
          <button className="default_button">
            <i className="radioButton"></i>
            <div>START</div>
          </button>
        </Link>
      </div>
    </>

    // <div>
    //   <main>
    //     <header>
    //       <h1 className="main_text">AutoamateX</h1>
    //       <Link to={"/CreateAccountPage"}>
    //         <button className="default_button">
    //           <i className="radioButton"></i>
    //           <h1>START</h1>
    //         </button>
    //       </Link>
    //     </header>
    //   </main>
    // </div>
  );
};

export default defaultPage;
