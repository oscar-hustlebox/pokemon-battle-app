import { usePokemon } from "../contexts/PokemonContext";

export const BattleView = () => {
  const { pokemon1, pokemon2, battleLog, isLoading, startBattle, resetBattle } =
    usePokemon();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="battle-view">
      <div className="pokemon-container">
        {/* TODO Pokemon 1 */}
        {/* TODO Pokemon 2 */}
      </div>
      <div className="battle-controls">
        <button onClick={startBattle}>Start Battle</button>
        <button onClick={resetBattle}>Reset Battle</button>
      </div>
      <div className="battle-log">
        <h2>Battle Log</h2>
        <p>{battleLog}</p>
      </div>
    </div>
  );
};
