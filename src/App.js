import { Switch, Route } from "react-router-dom";
import { default as Header } from "./components/header/header.container";
import { default as PokemonList } from "./pages/pokemon-list/pokemons-list.container";
import { default as PokemonDetail } from "./pages/pokemon-detail/pokemon-detail.container";
import { default as MyPokemons } from "./pages/my-pokemon/my-pokemon.container";
import NotFound from "./pages/not-found/not-found.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/pokemon/:name" component={PokemonDetail} />
        <Route exact path="/my-pokemon" component={MyPokemons} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
