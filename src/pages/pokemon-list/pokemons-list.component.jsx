import React from "react";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";

import { RowContainer, ListContainer, LoadMore } from "./pokemons-list.styles";

const PokemonsList = ({ pokemons, onLoadMore, loading }) => {
  const loadMore = () => {
    if (!loading) {
      onLoadMore();
    }
  };
  return (
    <>
      <ListContainer>
        <RowContainer>
          {pokemons.map(({ id, name, image }) => (
            <PokemonCard key={id} name={name} image={image} />
          ))}
        </RowContainer>
        {loading ? <LoadingSpinner /> : null}
        <LoadMore onClick={loadMore}>Load More</LoadMore>
      </ListContainer>
    </>
  );
};

export default PokemonsList;
