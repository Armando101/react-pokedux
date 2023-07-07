import "./App.css";
import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect, useRef } from "react";
import { getPokemon } from "./api";
import { connect } from "react-redux";
import { setPokemonsActions } from "./actions";

function App({ pokemons, setPokemons }) {
  console.log(pokemons, setPokemons);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
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
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

// Recibe el state y retorna un objeto cuyas propiedades serán enviadas a los props del componente que se está conectado a redux
const mapStateToProps = (state) => ({ pokemons: state.pokemons });

// Es una función que recibe el dispatcher de redux y retorna un objeto que será mapedo a las propiedades con los action creatrors
const mapDispatchToProps = (dispach) => ({
  setPokemons: (value) => dispach(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
