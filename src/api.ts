import { Move, Pokemon } from "./types";

const API_BASE_URL = "https://pokeapi.co/api/v2";

/*
  Fetches a random Pokemon from the PokeAPI.
  Returns a Promise that resolves to a Pokemon object.
*/
export const fetchRandomPokemon = async (): Promise<Pokemon> => {
  // The PokeAPI has a maximum of 1302 Pokemon, so we need to limit the random ID to 1302.
  const randomId = Math.min(Math.floor(Math.random() * 898) + 1, 1302);
  const response = await fetch(`${API_BASE_URL}/pokemon/${randomId}`);
  return response.json();
};

/*
  Fetches a move from the PokeAPI.
  Returns a Promise that resolves to a Move object.
*/
export const fetchMove = async (moveName: string): Promise<Move> => {
  const response = await fetch(`${API_BASE_URL}/move/${moveName}`);
  return response.json();
};
