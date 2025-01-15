import { BattleView } from "./components/BattleView";
import { PokemonProvider } from "./contexts/PokemonContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">
              Pokémon Battle
            </h1>
            <BattleView />
          </div>
        </div>
      </PokemonProvider>
    </QueryClientProvider>
  );
}

export default App;
