import React, { useState } from "react";
import axios from "axios";

const ApiCall = () => {
  const [pokemon, setPokemon] = useState([]);

  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then((res) => setPokemon(res.data));

  return <div>{pokemon}</div>;
};

export default ApiCall;
