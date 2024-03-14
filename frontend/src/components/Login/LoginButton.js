import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button
          className="btn mr-1 btn-primary text-lg"
          onClick={() => loginWithRedirect()}
          disabled={isAuthenticated}
        >
          Log In
        </button>
      ) : null}
    </div>
  );
}

export default LoginButton;

