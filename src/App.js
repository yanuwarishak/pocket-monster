import "./App.css";
import { default as PokemonList } from "./pages/pokemon-list/pokemons-list.container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonList/>
      </header>
    </div>
  );
}

export default App;
