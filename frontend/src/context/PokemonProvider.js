import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import axios from "axios";

const PokemonProvider = (props) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);

  const loadMoreData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_DOMAIN}/pokemon/rate-limit?limit=${limit}&skip=${skip}`
    );

    setPokemonData([...pokemonData, ...response.data.data]);
    setSkip(skip + limit);
  };

  useEffect(() => {
    loadMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    pokemonData,
    loadMoreData,
    setLimit,
  };
  return (
    <PokemonContext.Provider value={contextValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
