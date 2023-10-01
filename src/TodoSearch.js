import React from "react";
import "./TodoSearch.css";
import "./assets/search.svg";

function TodoSearch() {
  // actualizador se debe llamar igual pero se le agrega el set
  const [searchValue, setSearchValue] = React.useState("");

  console.log("los usurios buscan todos de " + searchValue);
  return (
    <div className="search-container">
      <input
        type="search"
        id="busqueda"
        name="busqueda"
        placeholder="Escribe tu búsqueda aquí"
        autoFocus
        autoComplete="on"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <button type="submit" name="buscar" className="search-button">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            fill="#fff"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
      </button>
    </div>
  );
}

export { TodoSearch };
