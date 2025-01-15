import { useQuery } from "@tanstack/react-query";
import { fetchMove } from "../api";

export const useFetchPokemonMove = (moveName: string) => {
  return useQuery({
    queryKey: ["pokemonMove", moveName],
    queryFn: () => fetchMove(moveName),
  });
};
