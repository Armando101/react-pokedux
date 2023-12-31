import "./App.css";
import { Col, Spin } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect, useRef } from "react";
import { getPokemon } from "./api";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPokemonWithDetails } from "./actions";

function App() {
  const { data, ui } = useSelector((state) => state, shallowEqual);

  const pokemons = data?.filteredPokemons;
  const loading = ui?.loading;

  const dispatcher = useDispatch();

  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatcher(getPokemonWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <Col offset={12}>
        <Spin spinning={loading} size="large" />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
