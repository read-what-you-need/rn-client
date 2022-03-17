import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RasteroColorIcon } from "../Icons";

import "./Signup.scss";
import { Input } from "antd";

import userApi from "../../api/user";

const SignUp = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleUserSignUp = () => {
    userApi
      .signUpUser({ username, password })
      .then(_res => {
        setResponseMessage("account created");
        navigate("/user/profile");
      })
      .catch(_err => setResponseMessage("Account already exists"));
  };

  return (
    <div className="sign-page">
      <div className="welcome-icon">
        <RasteroColorIcon />
      </div>
      <div className="welcome-greet">Become friends with Rastero!</div>

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
              onPressEnter={e => handleUserSignUp()}
            />
          </div>
        </div>

        <div className="submit-form-field">
          <button className="push-button primary" onClick={() => handleUserSignUp()}>
            <span className="submit-form-field-text"> Submit</span>
          </button>

          <span className="form-submit-info">{responseMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
