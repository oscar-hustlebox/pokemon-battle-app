import { usePokemonBattle } from "../hooks/usePokemonBattle";
import PokemonCard from "./PokemonCard";

export const BattleView = () => {
  const {
    pokemon1,
    pokemon2,
    move1,
    move2,
    battleLog,
    isLoading,
    isFetching,
    error,
    startBattle,
    resetBattle,
  } = usePokemonBattle();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <button
          onClick={resetBattle}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4 bg-gradient-to-b from-blue-400 to-green-300 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {pokemon1 && (
          <div className="transform md:translate-y-8">
            <PokemonCard
              pokemon={pokemon1}
              move={move1 || { name: "", power: 0 }}
              isBackView={true}
              isLoading={isLoading || isFetching}
            />
          </div>
        )}
        <div className="text-6xl font-bold text-yellow-400 drop-shadow-lg">
          VS
        </div>
        {pokemon2 && (
          <div className="transform md:-translate-y-8">
            <PokemonCard
              pokemon={pokemon2}
              move={move2 || { name: "", power: 0 }}
              isBackView={false}
              isLoading={isLoading || isFetching}
            />
          </div>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={startBattle}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Start Battle
        </button>
        <button
          onClick={resetBattle}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Reset Battle
        </button>
      </div>
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-xl max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Battle Log
        </h2>
        <div className="h-40 overflow-y-auto bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 whitespace-pre-line">
            {battleLog || "Click 'Start Battle' to begin the Pokémon showdown!"}
          </p>
        </div>
      </div>
    </div>
  );
};
