export const addPokemon = (myPokemonsList, pokemonToAdd) => {
  return [...myPokemonsList, { ...pokemonToAdd, nickname: "Solidade" }];
};
