import React from "react";
import "./CreateNewTodoButtonLoading.css";

function CreateNewTodoButtonLoading() {
  return (
    <div className="createNewTodo-containerloading">
      <p className="createNewTodoLoading-title"></p>
      <p className="createNewTodoLoading-input"></p>
      <span className="createNewTodoLoading-buton"></span>
    </div>
  );
}

export { CreateNewTodoButtonLoading };
