import React from "react";
import { Move, Pokemon } from "../types";

type PokemonCardProps = {
  pokemon: Pokemon | null; // Allow null for loading state
  move: Move | null | undefined; // Allow null or undefined for loading state
  isBackView: boolean;
  isLoading: boolean; // Add isLoading prop
};

const PokemonCard = ({
  pokemon,
  move,
  isBackView,
  isLoading,
}: PokemonCardProps) => {
  const isFirstPokemon = isBackView;

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 w-full md:w-64 border border-gray-200 flex flex-col items-center"
      style={{ height: "400px" }} // Fixed height for consistent appearance
    >
      {isLoading ? (
        // Loading State UI
        <div className="flex flex-col items-center justify-center h-full">
          <div className="animate-spin h-10 w-10 border-4 border-gray-300 border-t-blue-500 rounded-full mb-4"></div>
          <p className="text-gray-500">Loading Pokémon...</p>
        </div>
      ) : !pokemon ? (
        // Fallback if no Pokémon data
        <p className="text-gray-500">No Pokémon data available</p>
      ) : (
        // Pokémon Content
        <>
          <h2 className="text-2xl font-bold mb-4 capitalize text-center">
            {pokemon.name}
          </h2>
          <div className="relative h-48 w-48 mx-auto mb-4">
            <img
              src={
                isFirstPokemon
                  ? pokemon.sprites.back_default
                  : pokemon.sprites.front_default
              }
              alt={pokemon.name}
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="bg-gray-300 w-full h-4 rounded-full overflow-hidden mb-4">
            <div
              className="bg-green-500 h-full"
              style={{
                width: `${
                  pokemon.stats.find((stat) => stat.stat.name === "hp")
                    ?.base_stat
                }%`,
              }}
            ></div>
          </div>
          <div className="mt-4 space-y-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 capitalize">
              {pokemon.types[0].type.name}
            </span>
            <p className="text-lg">
              HP:{" "}
              {pokemon.stats.find((stat) => stat.stat.name === "hp")?.base_stat}
            </p>
            {move && (
              <div className="mt-2">
                <p className="font-semibold">Move: {move.name}</p>
                <p>Power: {move.power || "N/A"}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
