import React, { useState } from "react";
import { connect } from "react-redux";
import { RasteroColorIcon } from "../Icons";
import { Input } from "antd";
import { loginUser } from "../../actions";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";

const Signin = ({ loginUser, loginError }) => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = () => {
    loginUser({ username, password }).then(_res => {
      navigate("/books");
      window.location.reload();
    });
  };
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
                onPressEnter={handleUserLogin}
              />
            </div>
          </div>

          <div className="submit-form-field">
            <button className="push-button primary" onClick={handleUserLogin}>
              <span className="submit-form-field-text">Login</span>
            </button>
            <div className="form-submit-info">{loginError}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ loginError: state.userWrapper.error });

const actionCreators = { loginUser };
export default connect(mapStateToProps, actionCreators)(Signin);
