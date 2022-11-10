import "./MainContent.css";
import React, { useEffect, useState } from "react";
import { ListApi } from "../ListApi";
import { PokemonSearch } from "../PokemonSearch";
import { CardLayout } from "../CardLayout";
import axios from "axios";

// import { ListCard } from "../ListCard";

function MainContent() {
  const [pokemons, setPokemon] = useState([]);
  const [refreshPokemon, setRefreshPokemon] = useState(false);
  // console.log(pokemonApi, "api");

  useEffect(() => {
    getDataPokemonApi();
  }, []);

  const getDataPokemonApi = async () => {
    let allPokemon = [];
    try {
      let response = await axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=80")
        .then((el) => el.data.results);
      response = response.map(async (el) => await axios.get(el.url));
      response = await Promise.all(response).then((el) => {
        el.map((el) => {
          allPokemon.push({
            id: el.data.id,
            name: el.data.name,
            hp: el.data.stats.find((el) => el.stat.name === "hp").base_stat,
            img: el.data.sprites.other["official-artwork"].front_default,
            types: el.data.types.map((el) => el.type.name),
            defense: el.data.stats.find((el) => el.stat.name === "defense")
              .base_stat,
            attack: el.data.stats.find((el) => el.stat.name === "attack")
              .base_stat,
          });
          return allPokemon;
        });
      });

      setPokemon(allPokemon);
    } catch (error) {
      console.log(error);
    }
  };

  // const getData = async () => {
  //   try {
  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  //     if (response.ok) {
  //       const data = await response.json();
  //       setPokemon(data.results);
  //     } else {
  //       console.log("error");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [searchValue, setSearchValue] = React.useState("");
  const [requestLayaout, setRequestLayaout] = React.useState([]);

  // PARA FILTRAR ELEMENTOS BUSCADOS
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

  //PARA FILTRAR ELEMENTOS LLAMADOS CON SUS ATRIBUTOS

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
        <h1>BUSCADOR POR NOMBRE</h1>
        <div className="containerSearch">
          <PokemonSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            refreshPokemon={refreshPokemon}
            setRefreshPokemon={setRefreshPokemon}
          />
        </div>
        <ListApi
          searchedPokemon={searchedPokemon}
          requestLayaout={requestLayaout}
          setRequestLayaout={setRequestLayaout}
          refreshPokemon={refreshPokemon}
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
