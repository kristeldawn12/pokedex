import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import "../css/PokemonList.css";
import "../App.css";

const Home = () => {
  const { pokemonData, loadMoreData } = useContext(PokemonContext);

  const renderPokemon = () => {
    return pokemonData.map((pokemon, index) => {
      return (
        <div key={index}>
          <div className="flex flex-col items-center py-5 bg-white pokemon-card mx-2 rounded-md">
            <img
              src={pokemon.img}
              alt={pokemon.name}
              className="w-44 h-44 hover:animate-bounce"
            />
            <h3
              className="text-xl py-2 font-bold text-center font-russo text-teal-950
            "
            >
              {pokemon.name}
            </h3>
            <div className="flex gap-2 card-types">
              {pokemon.type.map((type, index) => (
                <span
                  key={index}
                  className={`${type.toLowerCase()} text-lg rounded-md px-3 py-1 text-white`}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="bg-red-100 min-h-[100vh]">
        <h1
          className="text-4xl md:text-6xl font-bold py-5 text-center font-russo text-teal-950 
        "
        >
          Pokedex
        </h1>
        <div className="flex justify-center">
          <div className="pokemon-list-card">{renderPokemon()}</div>
        </div>
        <div className="w-full flex justify-center">
          <button
            onClick={() => loadMoreData()}
            className="my-5 py-2 w-36 text-xl border bg-blue-950 text-white rounded-md hover:bg-blue-900"
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
