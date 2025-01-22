import { useQuery } from "@tanstack/react-query";
import { fetchMove } from "../api";

/*
  Fetches a move from the PokeAPI.
  Returns a Promise that resolves to a Move object.
*/
export const useFetchPokemonMove = (moveName?: string) => {
  return useQuery({
    enabled: !!moveName,
    queryKey: ["pokemonMove", moveName],
    queryFn: () => fetchMove(moveName),
  });
};
