import React from "react";
import "./logoHeader.css";


function LogoHeader({ img, alt }) {
  return (
    <figure className="figureContainer">
      <img
        src={require(`../Images/logoPokemon${img}.png`)}
        alt={`logo ${alt}`}
      />
    </figure>
  );
}
export { LogoHeader };
