import React from 'react';
import "../css/default.css"
import { Link } from 'react-router-dom';
const defaultPage = ({form, children}) => {
  return (
    <main>
    <body>
    <header>
      <h1 className="main_text">AutoamateX</h1>
          <Link to={'/CreateAccountPage'}>
          <button className="default_button">
            <i className='radioButton'></i><h1 className="label">START</h1>
          </button>
          </Link>
    </header>
    </body>
  </main>
  );
};

export default defaultPage; 