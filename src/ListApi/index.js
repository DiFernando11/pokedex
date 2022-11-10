import { useEffect, useState } from "react";
import { AskiAppi } from "../AskAppi";
import "./ListApi.css";

function ListApi({
  searchedPokemon,
  requestLayaout,
  setRequestLayaout,
  refreshPokemon,
}) {
  let [statePageVideoGame, setStatePageVideoGame] = useState(1);
  const searchedPokemonLength = searchedPokemon?.length;
  const numberPagesLength = Math.ceil(searchedPokemonLength / 8);
  let postsPerPage = 8;
  const lastPostIndex = statePageVideoGame * postsPerPage; // 4 //8
  const firstPostIndex = lastPostIndex - postsPerPage; //0 // 4
  const currentPosts = searchedPokemon.slice(firstPostIndex, lastPostIndex);

  const pages = [];
  for (let index = 1; index < numberPagesLength + 1; index++) {
    pages.push(index);
  }
  const handleChangePage = (page) => {
    setStatePageVideoGame(page);
  };
  const resetPage = () => {
    if (refreshPokemon) {
      setStatePageVideoGame(1);
    }
  };
  useEffect(() => {
    resetPage();
  }, [refreshPokemon]);


  return (
    <div>
      <div className="containerFigure">
        {currentPosts.length &&
          currentPosts.map((pokemon) => {
            return (
              <AskiAppi
                key={pokemon.name}
                pokemon={pokemon}
                requestLayaout={requestLayaout}
                setRequestLayaout={setRequestLayaout}
              />
            );
          })}
      </div>
      <div className="container_button_page">
        {pages.length
          ? pages.map((page, index) => (
              <button
                className="button_page"
                key={index}
                onClick={() => handleChangePage(page)}
              >
                {page}
              </button>
            ))
          : null}
      </div>
    </div>
  );
}

export { ListApi };
