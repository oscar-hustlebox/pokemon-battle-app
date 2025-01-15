import { usePokemon } from "../contexts/PokemonContext";
import PokemonCard from "./PokemonCard";

export const BattleView = () => {
  const {
    pokemon1,
    pokemon2,
    move1,
    move2,
    battleLog,
    isLoading,
    error,
    startBattle,
    resetBattle,
  } = usePokemon();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <button
          onClick={resetBattle}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {pokemon1 && (
          <PokemonCard
            pokemon={pokemon1}
            move={move1 || { name: "", power: 0 }}
            isBackView={true}
          />
        )}
        <div className="text-4xl font-bold">VS</div>
        {pokemon2 && (
          <PokemonCard
            pokemon={pokemon2}
            move={move2 || { name: "", power: 0 }}
            isBackView={false}
          />
        )}
      </div>
      <div className="flex justify-center gap-4">
        <button
          onClick={startBattle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Battle
        </button>
        <button
          onClick={resetBattle}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Reset Battle
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Battle Log:</h2>
        <p>{battleLog || "Click 'Start Battle' to begin!"}</p>
      </div>
    </div>
  );
};
