export const getPokemon = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then((res) => res.json())
    .then((data) => data.results);
};
