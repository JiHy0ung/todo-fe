import React from "react";
import TodoItem from "./TodoItem";
import darkModeStore from "../stores/darkModeStore";

const TodoBoard = ({ todoList, updateTask, deleteTask }) => {
  const { darkMode } = darkModeStore();

  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <TodoItem
            key={item._id}
            item={item}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <h2
          className={`d-flex align-items-center justify-content-center py-5 fs-6 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          등록된 할 일이 없습니다
        </h2>
      )}
    </div>
  );
};

export default TodoBoard;
