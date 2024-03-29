import React from "react";
import "./CardLayout.css";
//  import { AskiAppi } from "../AskAppi";
import { AskCard } from "../AskCard";
import imgsp from "../Images/Pikachu-1-973x1024.png";

function CardLayout({ requestLayaout, consultPokemon, setRequestLayaout }) {
  return (
    <>
      {!consultPokemon.length && (
        <div>
          <figure className="containerPokeballSelect">
            <img className="pokeballSelect" src={imgsp} alt="pichachu"></img>
          </figure>
        </div>
      )}
      {consultPokemon.map((pokemon) => {
        return (
          <AskCard
            key={pokemon.name}
            pokemon={pokemon}
            life={80}
            type={"Water"}
            stroke={300}
            defending={200}
            requestLayaout={requestLayaout}
            setRequestLayaout={setRequestLayaout}
          />
        );
      })}
    </>
  );
}

// {searchedPokemon.map((pokemon) => {
//   return <AskiAppi key={pokemon.name} pokemon={pokemon} />;
// })}

export { CardLayout };
