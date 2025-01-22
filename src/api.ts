import { Move, Pokemon } from "./types";

const API_BASE_URL = "https://pokeapi.co/api/v2";

/*
  Fetches a random Pokemon from the PokeAPI.
  Returns a Promise that resolves to a Pokemon object.

  The randomId generation logic:
  - Generates a number between 1-1302 (up to Gen 9 DLC Pokemon)

  Math explanation of randomId:
  1. Math.random() generates a decimal between 0 and 0.999... (not including 1)
  2. Multiply by 1302 to get a number between 0 and 1301.999...
  3. Math.floor() rounds down to nearest integer (0 to 1301)
  4. Add 1 to shift range to 1-1302 (matching Pokemon API's ID system)
*/
export const fetchRandomPokemon = async (): Promise<Pokemon> => {
  const randomId = Math.floor(Math.random() * 1302) + 1;
  const response = await fetch(`${API_BASE_URL}/pokemon/${randomId}`);
  return response.json();
};

/*
  Fetches a move from the PokeAPI.
  Returns a Promise that resolves to a Move object.
*/
export const fetchMove = async (moveName?: string): Promise<Move> => {
  const response = await fetch(`${API_BASE_URL}/move/${moveName}`);
  return response.json();
};
