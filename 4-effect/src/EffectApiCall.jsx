import React, { useState, useEffect } from "react";
import axios from "axios";

const EffectApiCall = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => {
        setPokemon(res.data);
        setLoaded(true);
      });
  }, [setPokemon]);

  if (!loaded) {
    return <div>loading</div>;
  }

  return (
    <div>
      {pokemon.results.map((poke) => {
        return <div> {poke.name} </div>;
      })}
    </div>
  );
};

export default EffectApiCall;
