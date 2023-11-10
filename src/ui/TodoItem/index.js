import React from "react";

import "./TodoItem.css";
import "../../assets/ckeck.svg";
import "../../assets/delete.svg";

function TodoItem(props) {
  const completed = props?.completed;

  //className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
  return (
    <li className={completed ? "containerItem" : "containerItem--complete"}>
      <span className="ckeck">
        <div>
          <svg
            onClick={props.onComplete}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            fill={completed ? "#ff26ba" : "#fff"}
            className="iconckeck"
          >
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </div>
      </span>
      <p className="textList">{props.text}</p>
      <span className="delete">
        <div>
          <svg
            onClick={props.onDelete}
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            id="deleteIcon"
          >
            <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
          </svg>
        </div>
      </span>
    </li>
  );
}

export { TodoItem };
