import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import userApi from "../../api/user";
import "./Signup.scss";


const Signin = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  return (
    <div>
      <div className="App">
        <h1>Login to account</h1>
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
                .signInUser({ username, password })
                .then(_res => {
                  navigate("/user/profile");
                })
                .catch(err => {
                    console.log(err)
                    setResponseMessage("Check if username and password is correct")
                });
            }}>
            Submit
          </button>
          <span className="form-submit-info">{responseMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
