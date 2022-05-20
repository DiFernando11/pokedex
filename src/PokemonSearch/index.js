import React from "react";

function PokemonSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  // let searchedPokemon = [];

  return (
    <input
      className="search"
      placeholder="Buscar por Nombre"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { PokemonSearch };
