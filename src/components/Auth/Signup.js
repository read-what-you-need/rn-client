import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../actions";
import { RasteroColorIcon } from "../Icons";

import "./Signup.scss";
import { message, Input } from "antd";

import Helpers from "../../libs/Helpers";

const SignUp = ({ signUpUser, signUpError }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserSignUp = () => {
    if (username === "" || email === "" || password === "") {
      message.warning("Username or email is empty");
    } else {
      if (Helpers.isEmailFieldValid(email)) {
        signUpUser({ username, email, password }).then(() => {
          navigate("/books");
        });
      } else {
        message.warning("Provide a valid email address");
      }
    }
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
          <div className="label">Email</div>
          <div className="field">
            <Input
              type="email"
              onChange={e => {
                setEmail(e.target.value);
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

          <span className="form-submit-info">{signUpError}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ signUpError: state.userWrapper.error });

const actionCreators = { signUpUser };
export default connect(mapStateToProps, actionCreators)(SignUp);
