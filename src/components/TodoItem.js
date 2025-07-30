import React from "react";
import { Col, Row } from "react-bootstrap";
import darkModeStore from "../stores/darkModeStore";

const TodoItem = ({ item, updateTask, deleteTask }) => {
  const { darkMode } = darkModeStore();

  return (
    <Row>
      <Col xs={12} className="pb-2">
        <div
          className={`todo-item ${darkMode ? "dark-mode" : ""} ${
            item.isComplete ? "item-complete" : ""
          }`}
        >
          <div className="py-1 px-3">
            <span>{item.task}</span>
            <span className="text-small">
              {item.author && ` by ${item.author.name}`}
            </span>
          </div>
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
        {item.contents && (
          <div
            className={`todo-contents ${darkMode ? "dark-mode" : ""} ${
              item.isComplete && "todo-contents-complete"
            }`}
          >
            {item.contents}
          </div>
        )}
      </Col>
    </Row>
  );
};

export default TodoItem;
