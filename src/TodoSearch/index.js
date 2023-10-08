import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <div className="search-container">
      <input
        type="search"
        id="busqueda"
        name="busqueda"
        placeholder="Escribe tu búsqueda aquí..."
        autoFocus
        autoComplete="on"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
