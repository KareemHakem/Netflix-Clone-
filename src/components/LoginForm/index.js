import React from "react";
import "./style.css";

export default function LoginForm({ login, register, emailRef, passwordRef }) {
  return (
    <div className="login-form-screen">
      <div className="login-screen-background">
        <img
          className="login-screen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="back"
        />
        <button className="singIn-btn">Sign In</button>
        <div className="loginScreen-gradient" />
      </div>
      <div className="login-form">
        <form>
          <h1>Sign In</h1>
          <input ref={emailRef} placeholder="Email" type="email" />
          <input ref={passwordRef} placeholder="password" type="password" />
          <button onClick={login} type="submit">
            Sign In
          </button>
          <h4>
            <span className="register-form-span">New to NetFlix? </span>
            <span onClick={register} className="register-form-link">
              Sin Up now
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
}
