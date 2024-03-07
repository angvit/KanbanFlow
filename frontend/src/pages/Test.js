import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Test() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nameUpdate, setNameUpdate] = useState("");
  const [ageUpdate, setAgeUpdate] = useState("");
  const [userIdUpdate, setUserIdUpdate] = useState("");
  const [userIdDelete, setUserIdDelete] = useState("");

  const { user } = useAuth0();

  const handleGet = () => {
    const request = axios.get("get");
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePost = (insert_name, insert_age) => {
    const userData = { name: insert_name, age: insert_age };
    const request = axios.post("post", userData);
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePut = (new_name, new_age, userId) => {
    const newUserData = {
      data: { name: new_name, age: new_age },
      userId: userId,
    };
    const request = axios.put("put", newUserData);
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (userId) => {
    const request = axios.delete(`delete`, {
      data: { userId },
    });
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createWorkspace = () => {
    const request = axios.post("workspaces", {
      data: { name: "Workspace", desecrption: "Description" },
      user: user.sub,
    });
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWorkspace = () => {
    const request = axios.get("workspaces");
    request
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>Test</div>
      <div className="flex flex-col">
        <button className="btn" onClick={() => handleGet()}>
          Get
        </button>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <button className="btn" onClick={() => handlePost(name, age)}>
            Post
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setNameUpdate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Age"
            onChange={(e) => setAgeUpdate(e.target.value)}
          />
          <input
            type="text"
            placeholder="ID"
            onChange={(e) => setUserIdUpdate(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => handlePut(nameUpdate, ageUpdate, userIdUpdate)} //THE ID IS TEMPERARY, TESTING PURPOSES
          >
            Put
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="ID"
            onChange={(e) => setUserIdDelete(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => handleDelete(userIdDelete)} //THE ID IS TEMPERARY, TESTING PURPOSES
          >
            Delete
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => createWorkspace()}>
            Create Workspace
          </button>
          <button className="btn" onClick={() => getWorkspace()}>
            Get Workspace
          </button>
        </div>
      </div>
    </>
  );
}

export default Test;
