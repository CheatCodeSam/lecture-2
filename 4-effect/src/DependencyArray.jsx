import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonDetail from "./PokemonDetail";

const DependencyArray = () => {
  const [pokemons, setPokemons] = useState({});
  const [pokemonDisplayed, setPokemonDisplayed] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((res) => {
        setPokemons(res.data);
        setLoaded(true);
      });
  }, [setPokemons]);

  if (!loaded) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div>
        {pokemons.results.map((poke) => {
          return (
            <div>
              <button
                className="btn btn-primary"
                onClick={() => setPokemonDisplayed(poke)}
              >
                {poke.name}
              </button>
            </div>
          );
        })}
      </div>
      <PokemonDetail url={pokemonDisplayed.url} />
    </div>
  );
};

export default DependencyArray;
