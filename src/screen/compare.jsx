import React, { useState } from "react";

const SignUpPage = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendEmail, setSendEmail] = useState("");
  // Other state variables...

  const handleEmail = (e) => {
    const email = e.target.value;
    setInputEmail(email);
  };

  const SendCode = () => {
    console.log("SendCode executed");
    // Perform API request here
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={inputEmail}
        onChange={handleEmail}
      />
      <button onClick={SendCode}>Send verification code</button>
      {/* Other components... */}
    </div>
  );
};

export default SignUpPage;
