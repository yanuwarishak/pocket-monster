import "./App.css";
import { Switch, Route } from "react-router-dom";
import { default as PokemonList } from "./pages/pokemon-list/pokemons-list.container";
import { default as PokemonDetail } from "./pages/pokemon-detail/pokemon-detail.container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route path="/pokemon/:name" component={PokemonDetail} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
