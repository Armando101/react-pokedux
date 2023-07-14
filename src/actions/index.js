import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADER, SET_POKEMONS, SET_SEARCHED } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoader = (payload) => ({
  type: SET_LOADER,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const filterPokemons = (payload) => ({
  type: SET_SEARCHED,
  payload,
});

export const getPokemonWithDetails =
  (pokemonList = []) =>
  async (dispatch) => {
    dispatch(setLoader(true));
    const pokemonDetails = await Promise.all(
      pokemonList.map(getPokemonDetails)
    );
    dispatch(setLoader(false));
    dispatch(setPokemons(pokemonDetails));
  };
