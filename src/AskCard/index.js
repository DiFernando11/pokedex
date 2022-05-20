import React from "react";
import "./AskCard.css";
import "../PokemonSearch/index";
import imgs from "../Images/logoPokemon1.png";

function AskCard({ pokemon: { name }, life, type, stroke, defending }) {
  return (
    <section className="cardLayout">
      <div className="containerAskCard">
        <figure className="containerImages">
          <img className="imgs figures" alt="pokemon" src={imgs} />
        </figure>
        <h1>{name}</h1>
        <ul className="containerHabilities">
          <li>
            Vida:{" "}
            <progress className="lifeBar" max={100} value={life}></progress>
          </li>
          <li>
            Type: <span className="bold"> {type} </span>{" "}
          </li>
          <li>
            Stroke: <span className="bold"> {stroke} </span>
          </li>
          <li>
            Defending: <span className="bold">{defending}</span>{" "}
          </li>
        </ul>
      </div>
    </section>
  );
}

export { AskCard };
