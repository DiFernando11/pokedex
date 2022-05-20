import "./AskAppi.css";
import "../PokemonSearch/index";
import imgs from "../Images/logoPokemon1.png";

function AskiAppi({ pokemon: { name }, setRequestLayaout }) {


  const onSearchValueChange = () => {
    setRequestLayaout(name);
  };

  return (
    <div className="containerCardPokemon">
      <li onClick={onSearchValueChange}>{name}</li>
      <figure className="containerImg">
        <img onClick={onSearchValueChange} alt="pokemon" src={imgs} />
      </figure>
    </div>
  );
}

export { AskiAppi };
