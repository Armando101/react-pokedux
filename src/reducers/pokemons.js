import { SET_FAVORITE, SET_POKEMONS, SET_SEARCHED } from "../actions/types";

const initialState = {
  pokemons: [],
  filteredPokemons: [],
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case SET_FAVORITE:
      const pokemonId = action.payload;
      const newState = structuredClone(state);

      const selectedPokemon = newState.pokemons.find(
        (pokemon) => pokemon.id === pokemonId
      );
      if (!selectedPokemon) return { ...state };

      selectedPokemon.isFavorite = !selectedPokemon.isFavorite;
      return newState;
    case SET_SEARCHED:
      const { payload } = action;
      if (!payload) return { ...state, filteredPokemons: state.pokemons };
      const filteredPokemons = state.pokemons.filter((pokemon) =>
        pokemon.name.includes(payload.toLowerCase())
      );
      return { ...state, filteredPokemons };
    default:
      return state;
  }
};
