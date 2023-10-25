import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
