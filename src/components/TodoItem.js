import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({ item, updateTask, deleteTask, darkMode }) => {
  // console.log("i", item);
  return (
    <Row>
      <Col xs={12}>
        <div
          className={`todo-item ${darkMode ? "dark-mode" : ""} ${
            item.isComplete ? "item-complete" : ""
          }`}
        >
          <div className="todo-content">{item.task}</div>

          <div>
            <button
              className={`button-delete ${
                item.isComplete ? "button-complete" : ""
              }`}
              onClick={() => updateTask(item._id)}
            >
              {item.isComplete ? "끝남" : "끝내기"}
            </button>
            <button
              className={`button-delete ${
                item.isComplete ? "button-complete" : ""
              }`}
              onClick={() => deleteTask(item._id)}
            >
              삭제
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
