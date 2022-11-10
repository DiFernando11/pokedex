import React from "react";

function PokemonSearch({ searchValue, setSearchValue, setRefreshPokemon, refreshPokemon }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    setRefreshPokemon(!refreshPokemon);
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
