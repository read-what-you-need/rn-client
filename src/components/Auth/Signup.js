import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

import userApi from "../../api/user";

const SignUp = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  return (
    <div className="App">
      <h1>Create new account</h1>
      <div className="form-wrapper">
        <span className="form">
          username
          <input
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </span>
        <span className="form">
          password
          <input
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </span>
        <button
          className="submit-button"
          onClick={() => {
            userApi
              .signUpUser({ username, password })
              .then(_res => {
                setResponseMessage("account created");
                navigate("/user/profile");
              })
              .catch(_err => setResponseMessage("account already exists"));
          }}>
          Submit
        </button>
        <span className="signup-info">{responseMessage}</span>
      </div>
    </div>
  );
};

export default SignUp;
