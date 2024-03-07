import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  const { user } = useAuth0();
  useEffect(() => {
    if (user) {
      const request = axios.post("users", user);
      request
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return <h1>Home Page</h1>;
}

export default Home;
