import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <button
          className="btn"
          onClick={() => logout()}
        >
          Log Out
        </button>
      ) : null}
    </div>
  );
}

export default LogoutButton;
