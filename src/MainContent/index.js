import "./MainContent.css";
import React, { useEffect, useState } from "react";
import { ListApi } from "../ListApi";
import { PokemonSearch } from "../PokemonSearch";
import { CardLayout } from "../CardLayout";

// import { ListCard } from "../ListCard";

function MainContent() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      if (response.ok) {
        const data = await response.json();
        setPokemon(data.results);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [searchValue, setSearchValue] = React.useState("");
  const [requestLayaout, setRequestLayaout] = React.useState([]);

  let searchedPokemon = [];
  if (!searchValue.length >= 1) {
    searchedPokemon = pokemons;
  } else {
    searchedPokemon = pokemons.filter((pokedex) => {
      const pokemonText = pokedex.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      const searchCompleted = pokemonText.includes(searchText);
      return searchCompleted;
    });
  }

  let consultPokemon = [];

  if (!requestLayaout.length >= 1) {
    consultPokemon = [];
  } else {
    consultPokemon = pokemons.filter((pokedex) => {
      const pokemonText = pokedex.name.toLowerCase();
      const searchText = requestLayaout.toLowerCase();
      const searchCompleted = pokemonText === searchText;
      return searchCompleted;
    });
  }

  return (
    <main className="mainContent">
      <section className="containerPokemon">
        <h1>Buscador por Nombre o ID</h1>
        <div className="containerSearch">
          <PokemonSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <ListApi
          searchedPokemon={searchedPokemon}
          requestLayaout={requestLayaout}
          setRequestLayaout={setRequestLayaout}
        />
      </section>

      <CardLayout
        consultPokemon={consultPokemon}
        requestLayaout={requestLayaout}
        setRequestLayaout={setRequestLayaout}
      />
  
    </main>
  );
}

export { MainContent };
