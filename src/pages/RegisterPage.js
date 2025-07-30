import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import darkModeStore from "../stores/darkModeStore";

const RegisterPage = () => {
  const { darkMode, isDarkMode } = darkModeStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    // Form은 백엔드를 호출하기 위해 refresh를 하기 때문에 그걸 막기 위함.
    e.preventDefault();

    try {
      // 비밀번호 일치 확인
      if (!name.trim()) {
        throw new Error("이름을 입력해주세요.");
      } else if (!email.trim()) {
        throw new Error("이메일을 입력해주세요.");
      } else if (!password.trim()) {
        throw new Error("비밀번호를 입력해주세요.");
      } else if (confirmPassword.trim() === "") {
        throw new Error("비밀번호 확인을 진행해주세요.");
      }

      if (password !== confirmPassword) {
        throw new Error("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      } else {
        const response = await api.post("/user", { name, email, password });
        if (response.status === 200) {
          navigate("/login");
        } else {
          throw new Error(response.data.err);
        }
      }
    } catch (err) {
      const error = err.message || err.err;
      setError(error);
      console.log("error:", error);
    }
  };

  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"} display-center`}>
      <Form className="d-flex gap-2 p-2 justify-content-end align-items-center">
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
      <Form className="login-box" onSubmit={handleRegister}>
        <h1>회원가입</h1>
        {error && <p className="text-danger mb-1">{error}</p>}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter e-mail"
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>re-enter password</Form.Label>
          <Form.Control
            type="password"
            placeholder="re-enter password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button
            className="button-primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            돌아가기
          </Button>
          <Button className="button-primary" type="submit">
            회원가입
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
