import React from "react";
import Home from "./pages/Home";
import News from "./pages/News";
import Regiester from "./pages/Regiester";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { Route, Link } from "react-router-dom";
import { AuthContext } from "./pages/helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  //when we refresh  page login regiester not showing again
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });

    // if(localStorage.getItem('accessToken'))
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    // setAuthState(false);
  };

  return (
    <div>
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">Create Post</Nav.Link>
        </Nav.Item>

        {!authState.status ? (
          <>
            <Nav.Item>
              <Nav.Link href="/login">login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/register">regiester</Nav.Link>
            </Nav.Item>

            <br />
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </Nav>

      <AuthContext.Provider value={{ authState, setAuthState }}>
        {authState.username}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={CreatePost} />
        <Route path="/post/:id" exact component={News} />
        <Route path="/register" component={Regiester} />
        <Route path="/login" component={Login} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
