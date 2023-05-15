import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import axios from "axios";

const PokemonProvider = (props) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [skip, setSkip] = useState(0);

  const loadMoreData = async () => {
    const response = await axios.get(
      `${
        process.env.REACT_APP_SERVER_DOMAIN
      }/pokemon/rate-limit?limit=${20}&skip=${skip}`
    );

    setPokemonData([...pokemonData, ...response.data.data]);
    setSkip(skip + 20);
  };

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    pokemonData,
    loadMoreData,
  };
  return (
    <PokemonContext.Provider value={contextValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
