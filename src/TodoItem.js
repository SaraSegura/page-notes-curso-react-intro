import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="containerItem">
      <span className="filled">✅ </span>
      <p className="textList">{props.text}</p>
      <span className="remove">X</span>
    </li>
  );
}

export { TodoItem };
