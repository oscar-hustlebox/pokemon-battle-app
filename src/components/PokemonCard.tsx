import React from "react";
import { Move, Pokemon } from "../types";

type PokemonCardProps = {
  pokemon: Pokemon;
  move: Move;
  isBackView: boolean;
};

const PokemonCard = ({ pokemon, move, isBackView }: PokemonCardProps) => {
  const isFirstPokemon = isBackView;
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-64">
      <h2 className="text-2xl font-bold mb-2 capitalize">{pokemon.name}</h2>
      <div className="relative h-48 w-48 mx-auto">
        <img
          src={
            isFirstPokemon
              ? pokemon.sprites.back_default
              : pokemon.sprites.front_default
          }
          alt={pokemon.name}
          className="absolute inset-0 w-full h-full object-contain transition-all duration-300 hover:scale-110"
        />
      </div>
      <div className="mt-4 space-y-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 capitalize">
          {pokemon.types[0].type.name}
        </span>
        <p className="text-lg">
          HP: {pokemon.stats.find((stat) => stat.stat.name === "hp")?.base_stat}
        </p>
        {move && (
          <div className="mt-2">
            <p className="font-semibold">Move: {move.name}</p>
            <p>Power: {move.power || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
