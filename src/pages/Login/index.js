import React from "react";
import { useNavigate } from "react-router-dom";

import LoginScreen from "../../components/LoginScreen";

export default function Login() {
  const navigate = useNavigate();

  const handleNavigateLoginPage = () => {
    navigate("/login");
  };

  return (
    <div>
      <LoginScreen handleNavigateLoginPage={handleNavigateLoginPage} />
    </div>
  );
}
