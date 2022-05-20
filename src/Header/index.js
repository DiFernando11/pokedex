import React from "react";
import { LogoHeader } from "../logoHeader/LogoHeader";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="logoHeader">
        <div className="containerImgHeader">
          <div className="containerLogoMobile">
            <LogoHeader img="1" alt="Pokemon" />
            <LogoHeader img="2" alt="jugar" />
          </div>
          <div className="containerDestokp">

          <LogoHeader className="imagesDesktop" img="3" alt="Arceus" />
          <LogoHeader
            className="imagesDesktop"
            img="4"
            alt="Astros Brillantes"
            />
          <LogoHeader className="imagesDesktop" img="5" alt="Pokemon Unite" />
          <LogoHeader
            className="imagesDesktop"
            img="6"
            alt="Pokemon Diamante"
            />
            </div>
        </div>
      </header>
      <div className="logoPokedex">
        <h2 className="border">POKÉDEX</h2>
        <h2 className="borderLogo">POKÉDEX</h2>
      </div>
    </>
  );
}

export { Header };
