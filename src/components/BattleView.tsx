import { usePokemon } from "../contexts/PokemonContext";

export const BattleView = () => {
  const { pokemon1, pokemon2, battleLog, isLoading, startBattle, resetBattle } =
    usePokemon();
  console.log(
    pokemon1,
    pokemon2,
    battleLog,
    isLoading,
    startBattle,
    resetBattle
  );
  return <div>BattleView</div>;
};
