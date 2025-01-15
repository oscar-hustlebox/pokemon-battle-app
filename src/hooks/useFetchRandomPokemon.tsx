import { useQuery } from "@tanstack/react-query";
import { fetchRandomPokemon } from "../api";

export const useFetchRandomPokemon = () => {
  return useQuery({
    queryKey: ["randomPokemon"],
    queryFn: fetchRandomPokemon,
  });
};
