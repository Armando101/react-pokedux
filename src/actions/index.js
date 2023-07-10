import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const getPokemonWithDetails =
  (pokemonList = []) =>
  async (dispatch) => {
    const pokemonDetails = await Promise.all(
      pokemonList.map(getPokemonDetails)
    );
    dispatch(setPokemons(pokemonDetails));
  };
