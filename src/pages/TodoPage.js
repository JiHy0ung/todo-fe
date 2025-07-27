import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoBoard from "../components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import api from "../utils/api";
import { Form, Toast } from "react-bootstrap";
import darkModeStore from "../stores/darkModeStore";

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [placeholder, setPlaceholder] = useState("할 일을 입력하세요.");
  const [placeholderColor, setPlaceholderColor] = useState("grey");

  const [show, setShow] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { darkMode, isDarkMode } = darkModeStore();

  const getTasks = async () => {
    const response = await api.get("/tasks");
    setTodoList(response.data.data);
  };

  const addTask = async () => {
    if (todoValue.trim() === "") {
      setPlaceholder("내용을 입력해주세요!");
      setPlaceholderColor("lightsalmon");
      return;
    }

    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200) {
        console.log("success");
        setTodoValue("");
        setPlaceholder("할 일을 입력하세요.");
        setToastMessage(
          `${todoValue}을/를 성공적으로 추가했습니다! 꼭 성공하시길 바래요!`
        );
        setShow(true);
        getTasks();
      } else {
        throw new Error("Task can not be added");
      }
    } catch (err) {
      console.error("Failed", err);
    }
  };

  const updateTask = async (id) => {
    try {
      const task = todoList.find((item) => item._id === id);
      const response = await api.put(`tasks/${id}`, {
        isComplete: !task.isComplete,
      });
      if (response.status === 200) {
        console.log("updated");
        if (task.isComplete) {
          setToastMessage("다 못 끝내신건가요? ㅠ,.ㅠ");
        } else {
          setToastMessage(`${task.task}을/를 마치셨군요! 축하드립니다!!`);
        }
        setShow(true);
        getTasks();
      } else {
        throw new Error("Tasks can not be updated");
      }
    } catch (err) {
      console.error("Update Failed", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const task = todoList.find((item) => item._id === id);
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        console.log("deleted");
        setToastMessage(`${task.task}을/를 성공적으로 삭제했습니다!`);
        setShow(true);
        getTasks();
      } else {
        throw new Error("Task can not be deleted");
      }
    } catch (err) {
      console.error("Deleted Failed", err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div
      style={{ minHeight: "100vh", minWidth: "100vw" }}
      className={`${darkMode ? "dark-mode" : "light-mode"} container`}
    >
      <Container>
        <Form className="d-flex gap-2 pt-2 justify-content-end align-items-center">
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
        <Row className="add-item-row">
          <h1 className="d-flex justify-content-center align-items-center py-3 text-extra-bold">
            TODO LIST
          </h1>
          <Col xs={12} sm={10}>
            <input
              type="text"
              placeholder={placeholder}
              className="input-box"
              value={todoValue}
              onChange={(e) => {
                setTodoValue(e.target.value);
                setPlaceholder("할일을 입력하세요.");
                setPlaceholderColor("grey");
              }}
              style={{ "--placeholder-color": placeholderColor }}
            />
          </Col>
          <Col xs={12} sm={2}>
            <button className="button-add" onClick={addTask}>
              추가
            </button>
          </Col>
        </Row>

        <TodoBoard
          todoList={todoList}
          updateTask={updateTask}
          deleteTask={deleteTask}
          darkMode={darkMode}
        />
      </Container>

      <div className="toast-area">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={10000}
          autohide
        >
          <Toast.Header className="d-flex justify-content-between w-100 rounded text-extra-bold">
            TODO LIST
          </Toast.Header>
          <Toast.Body className="text-warning bg-light rounded">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </div>
    </div>
  );
};

export default TodoPage;
