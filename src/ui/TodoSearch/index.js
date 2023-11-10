import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
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
        disabled={loading}
      />
    </div>
  );
}

export { TodoSearch };
