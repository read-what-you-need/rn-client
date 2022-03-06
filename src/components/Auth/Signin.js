import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RasteroColorIcon } from "../Icons";
import { Input } from "antd";

import userApi from "../../api/user";
import "./Signup.scss";

const Signin = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  return (
    <div>
      <div className="sign-page">
        <div className="welcome-icon">
          <RasteroColorIcon />
        </div>
        <div className="welcome-greet">Welcome Back</div>
        <div className="form-wrapper">
          <div className="form-field">
            <div className="label">Username</div>
            <div className="field">
              <Input
                onChange={e => {
                  setUsername(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-field">
            <div className="label">Password</div>
            <div className="field">
              <Input
                type="password"
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="submit-form-field">
            <button
              className="push-button primary"
              onClick={() => {
                userApi
                  .signInUser({ username, password })
                  .then(_res => {
                    navigate("/user");
                    setResponseMessage("");
                    window.location.reload();
                  })
                  .catch(err => {
                    console.log(err);
                    setResponseMessage("Username or password is incorrect");
                  });
              }}>
              <span className="submit-form-field-text">Login</span>
            </button>

            <div className="form-submit-info">{responseMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
