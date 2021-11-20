import React from "react";
import "./Signup.scss"

import userApi from "../../api/user";

const SignUp = () => {
  return (
    <div className="App">
      <h1>Create new account</h1>
      <div className="form-wrapper">
        <span className="form">
          username
          <input />
        </span>
        <span className="form">
          password
          <input />
        </span>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default SignUp;
