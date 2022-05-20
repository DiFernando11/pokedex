import { AskiAppi } from "../AskAppi";
import "./ListApi.css";

function ListApi({ searchedPokemon, requestLayaout, setRequestLayaout }) {
  return (
    <div className="containerFigure">
      {searchedPokemon.map((pokemon) => {
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
  );
}

export { ListApi };
