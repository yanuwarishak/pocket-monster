import "./App.css";
import { Switch, Route } from "react-router-dom";
import { default as Header } from "./components/header/header.container";
import { default as PokemonList } from "./pages/pokemon-list/pokemons-list.container";
import { default as PokemonDetail } from "./pages/pokemon-detail/pokemon-detail.container";
import MyPokemon from "./pages/my-pokemon/my-pokemon.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/pokemon/:name" component={PokemonDetail} />
        <Route exact path="/my-pokemon" component={MyPokemon} />
      </Switch>
    </div>
  );
}

export default App;
