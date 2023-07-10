export const getPokemon = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then((res) => res.json())
    .then((data) => data.results);
};

export const getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then((res) => res.json())
    .then((data) => data)
    .catch(console.log);
};
