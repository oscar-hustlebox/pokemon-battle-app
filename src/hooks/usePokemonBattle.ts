import { useState, useEffect } from "react";
import { useFetchRandomPokemon } from "./useFetchRandomPokemon";
import { useFetchPokemonMove } from "./useFetchPokemonMove";

/**
 * Hook to handle the battle between two random Pokemon.
 * @returns {Object} - An object containing the battle data and functions to start and reset the battle.
 */
export const usePokemonBattle = () => {
  const [battleLog, setBattleLog] = useState<string>("");

  const {
    data: pokemon1,
    isLoading: pokemon1Loading,
    error: pokemon1Error,
    refetch: refetchPokemon1,
    isFetching: pokemon1Fetching,
  } = useFetchRandomPokemon("pokemon1");

  const {
    data: pokemon2,
    isLoading: pokemon2Loading,
    error: pokemon2Error,
    refetch: refetchPokemon2,
    isFetching: pokemon2Fetching,
  } = useFetchRandomPokemon("pokemon2");

  const {
    data: move1,
    isLoading: move1Loading,
    error: move1Error,
    refetch: refetchMove1,
    isFetching: move1Fetching,
  } = useFetchPokemonMove(pokemon1?.moves[0].move.name);

  const {
    data: move2,
    isLoading: move2Loading,
    error: move2Error,
    refetch: refetchMove2,
    isFetching: move2Fetching,
  } = useFetchPokemonMove(pokemon2?.moves[0].move.name || "");

  const startBattle = () => {
    if (pokemon1 && pokemon2 && move1 && move2) {
      const power1 = move1.power || 0;
      const power2 = move2.power || 0;

      if (power1 > power2) {
        setBattleLog(
          `${pokemon1.name} lands a decisive blow with ${move1.name} (Power: ${power1}) knocking out ${pokemon2.name}!`
        );
      } else if (power2 > power1) {
        setBattleLog(
          `${pokemon2.name} lands a decisive blow with ${move2.name} (Power: ${power2}) knocking out ${pokemon1.name}!`
        );
      } else {
        setBattleLog(
          `It's a draw! Both ${pokemon1.name} and ${pokemon2.name} used moves with power ${power1}.`
        );
      }
    }
  };

  const resetBattle = async () => {
    setBattleLog("");
    await Promise.all([
      refetchPokemon1(),
      refetchPokemon2(),
      refetchMove1(),
      refetchMove2(),
    ]);
  };

  return {
    pokemon1,
    pokemon2,
    move1,
    move2,
    battleLog,
    isLoading:
      pokemon1Loading || pokemon2Loading || move1Loading || move2Loading,
    isFetching:
      pokemon1Fetching || pokemon2Fetching || move1Fetching || move2Fetching,
    error:
      pokemon1Error?.message ||
      pokemon2Error?.message ||
      move1Error?.message ||
      move2Error?.message ||
      null,
    startBattle,
    resetBattle,
  };
};
