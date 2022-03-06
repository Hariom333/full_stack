import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../pages/helpers/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        history.push("/");
      }
    });
  };

  return (
    <div>
      <p>Login</p>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
