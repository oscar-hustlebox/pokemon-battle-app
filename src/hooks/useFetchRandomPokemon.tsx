import { useQuery } from "@tanstack/react-query";
import { fetchRandomPokemon } from "../api";

/*
  Fetches a random Pokemon from the PokeAPI.
  Returns a Promise that resolves to a Pokemon object.
*/
export const useFetchRandomPokemon = (uniqueKey: string) => {
  return useQuery({
    queryKey: ["randomPokemon", uniqueKey],
    queryFn: () => fetchRandomPokemon(),
    refetchOnMount: true,
    staleTime: 0,
  });
};
