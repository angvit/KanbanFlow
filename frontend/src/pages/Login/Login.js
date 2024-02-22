import React from "react";
import LoginButton from "../../components/Login/LoginButton";
import LogoutButton from "../../components/Login/LogoutButton";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default Login;
