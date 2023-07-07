import React from "react";
import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons?.map((pokemon, index) => (
        <PokemonCard {...pokemon} key={index} />
      ))}
    </div>
  );
};
