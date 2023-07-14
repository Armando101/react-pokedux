import Input from "antd/es/input/Input";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokemons } from "../actions";

export const Searcher = () => {
  const dispatcher = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatcher(filterPokemons(searchQuery));
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <Input
      onChange={(event) => setSearchQuery(event.target.value)}
      placeholder="Buscar..."
      style={{ marginBottom: 16 }}
    />
  );
};
