import React from 'react'

const PokemonDetail = ({pokemon}) => {
    console.log(pokemon)
    // const {name, abilities} = pokemon
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.weight}</h2>
            <h2>{pokemon.height}</h2>
            <button>catch</button>
        </div>
    )
}

export default PokemonDetail;