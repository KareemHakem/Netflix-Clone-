import React from "react";
import "./style.css";

export default function LoginScreen({
  handleNavigateLoginPage,

}) {
  return (
    <div className="login-form-screen">
      <div className="login-screen-background">
        <img
          className="login-screen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="back"
        />
        <button onClick={handleNavigateLoginPage} className="singIn-btn">
          Sign In
        </button>
        <div className="loginScreen-gradient" />
      </div>
      <div className="loginScreen-body">
        <>
          <h1>Unlimited films, TV Programmes and more</h1>
          <h2>watch anywhere cancel any time</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="login-from-input">
            <form>
              <input type="email" placeholder="Email address" />
              <button
                onClick={handleNavigateLoginPage}
                className="login-form-btm"
              >
                Get Started
              </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}
