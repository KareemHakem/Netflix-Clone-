import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { auth } from "../../firebase";

export default function AuthLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigator = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigator("/Profile");
      console.log(user);
    } catch (err) {
      alert(err.message);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigator("/Profile");
      console.log(user);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <LoginForm
        login={login}
        register={register}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
    </div>
  );
}
