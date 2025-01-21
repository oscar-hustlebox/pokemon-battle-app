import { useQuery } from "@tanstack/react-query";
import { fetchRandomPokemon } from "../api";

/*
  Fetches a random Pokemon from the PokeAPI.
  Returns a Promise that resolves to a Pokemon object.
*/
export const useFetchRandomPokemon = (uniqueKey: string) => {
  return useQuery({
    enabled: !!uniqueKey, // Only fetch if uniqueKey is provided
    queryKey: ["randomPokemon", uniqueKey],
    queryFn: () => fetchRandomPokemon(),
    refetchOnMount: true,
    staleTime: 0,
  });
};
