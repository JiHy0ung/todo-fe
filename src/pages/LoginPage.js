import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../utils/api";
import darkModeStore from "../stores/darkModeStore";

const LoginPage = ({ user, setUser }) => {
  const { darkMode, isDarkMode } = darkModeStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // refresh 방지
    e.preventDefault();
    try {
      const response = await api.post("/user/login", { email, password });
      if (response.status === 200) {
        // 유저 정보 저장
        setUser(response.data.user);
        // 토큰 값 저장 (세선 스토리지/로컬 스토리지)
        sessionStorage.setItem("token", response.data.token);
        // localStorage.setItem("token", response.data.user.token);

        // 저장한 토큰 값을 api 헤더에 넣어주기
        api.defaults.headers["authorization"] = "Bearer " + response.data.token;
        setError("");
        navigate("/");
      } else {
        throw new Error(response.err);
      }
    } catch (err) {
      setError(err.err);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"} display-center`}>
      <Form
        className={`d-flex gap-2 p-2 justify-content-end align-items-center`}
      >
        <Form.Label
          className={`d-flex align-items-center justify-content-center fs-6 mb-0 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Form.Label>
        <Form.Check
          type="switch"
          id="dark-mode-switch"
          onClick={isDarkMode}
          checked={darkMode}
          className="d-flex justify-content-center align-self-center"
        ></Form.Check>
      </Form>
      <Form
        className={`${darkMode ? "dark-mode" : "light-mode"} login-box`}
        onSubmit={handleLogin}
      >
        <h1>로그인</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        {error && <p className="text-danger mb-1">{error}</p>}
        <div className="button-box">
          <Button type="submit" className="button-primary">
            로그인
          </Button>
          <span>
            계정이 없다면? <Link to="/register">회원가입 하기</Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
