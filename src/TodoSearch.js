import "./TodoSearch.css";

function TodoSearch() {
  return (
    <input
      type="search"
      id="busqueda"
      name="busqueda"
      placeholder="Escribe tu búsqueda aquí"
      autofocus
      autocomplete="on"
    />
  );
}

export { TodoSearch };
