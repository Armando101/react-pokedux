import { SET_FAVORITE, SET_LOADER, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADER:
      return { ...state, loading: action.payload };
    case SET_FAVORITE:
      const pokemonId = action.payload;
      const newState = structuredClone(state);

      const selectedPokemon = newState.pokemons.find(
        (pokemon) => pokemon.id === pokemonId
      );
      if (!selectedPokemon) return { ...state };

      selectedPokemon.isFavorite = !selectedPokemon.isFavorite;
      return newState;
    default:
      return state;
  }
};
