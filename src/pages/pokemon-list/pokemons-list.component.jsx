import React, { useEffect } from "react";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";

import { RowContainer, ListContainer, LoadMore, RibbonHeader } from "./pokemons-list.styles";

const PokemonsList = ({ pokemons, onLoadMore, loading }) => {
  useEffect(() => {
    document.title = "Pokedex";
  }, []);

  const loadMore = () => {
    if (!loading) {
      onLoadMore();
    }
  };
  return (
    <ListContainer>
      <RibbonHeader>Pokedex</RibbonHeader>
      <RowContainer>
        {pokemons.map(({ id, name, image }) => (
          <PokemonCard key={id} name={name} image={image} />
        ))}
      </RowContainer>
      {loading ? <LoadingSpinner /> : null}
      <LoadMore onClick={loadMore}>Load More</LoadMore>
    </ListContainer>
  );
};

export default PokemonsList;
