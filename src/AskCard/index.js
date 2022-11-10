import React from "react";
import "./AskCard.css";
import "../PokemonSearch/index";

function AskCard({ pokemon: { name, img, hp, attack, defense, types } }) {
  return (
    <section className="cardLayout">
      <div className="containerAskCard">
        <figure className="containerImages">
          <img className="imgs figures" alt="pokemon" src={img} />
        </figure>
        <h1>{name}</h1>
        <ul className="containerHabilities">
          <li>
            <span className="atributePokemon healtAttribute">Healt:</span>
            <progress className="lifeBar" max={100} value={hp}></progress>
          </li>
          <li>
            <span className="atributePokemon">Types:</span>
            {types?.length &&
              types.map((type) => <span className="bold">{type},</span>)}
          </li>
          <li>
            <span className="atributePokemon">Stroke</span>
            <span className="bold"> {attack} </span>
          </li>
          <li>
            <span className="atributePokemon"> Defending:</span>
            <span className="bold">{defense}</span>{" "}
          </li>
        </ul>
      </div>
    </section>
  );
}

export { AskCard };
