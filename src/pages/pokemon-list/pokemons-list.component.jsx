import React from "react";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";

import { ListContainer, LoadMore } from "./pokemons-list.styles";

const PokemonList = ({ results, onLoadMore, loading }) => {
  const loadMore = () => {
    if (!loading) {
      console.log("load more");
      onLoadMore();
    }
  };
  console.log("component loading " + loading);
  return (
    <>
      {loading ? <LoadingSpinner /> : null}
      <ListContainer>
        {results.map(({ id, name, image }) => (
          <PokemonCard key={id} name={name} image={image} />
        ))}
      </ListContainer>
      <LoadMore onClick={loadMore}>Load More</LoadMore>
    </>
  );
};

export default PokemonList;
