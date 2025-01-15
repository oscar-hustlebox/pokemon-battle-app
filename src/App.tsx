import { BattleView } from "./components/BattleView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Pokémon Battle
          </h1>
          <BattleView />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
