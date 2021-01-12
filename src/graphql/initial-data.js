let pokemonList = localStorage.getItem("myPokemonsList");
let lists = JSON.parse(pokemonList);
let cachedList = lists.map((obj) => ({ ...obj, __typename: "Pokemon" }));

const INITIAL_DATA = {
  myPokemonsList: cachedList,
};

export default INITIAL_DATA;
