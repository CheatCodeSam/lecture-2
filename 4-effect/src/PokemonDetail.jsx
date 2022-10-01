import React from "react";
import { useEffect } from "react";
import axios from "axios";

import { useState } from "react";

const PokemonDetail = (props) => {
  const [count, setCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setPokemon(res.data);
      setLoaded(true);
    });
  }, [setPokemon, props.url]);

  if (!loaded) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div>{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} />
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default PokemonDetail;
