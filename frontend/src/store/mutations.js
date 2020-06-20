export const mutations = {
  // update pokedex state with all pokemons list
  setAllPokemons(state, pokemons) {
    state.pokedexs = pokemons;
  },
  // update pokemonTypes state with pokemon types
  setAllTypes(state, types) {
    state.pokemonTypes = types;
  },
  // update searchPokedexText state with updated text in filter
  changeSearchText(state, text) {
    state.searchPokedexText = text;
  },
  // update searchPokedexTypes state with updated types in filter
  changeSearchTypes(state, types) {
    state.searchPokedexTypes = types;
  },
  // update currentPokemon state with pokeman details
  setCurentPokemon(state, pokemon) {
    state.currentPokemon = pokemon;
  },
  // update displayMode state on selection/change of mode in filter
  setDisplayMode(state, displayMode) {
    state.displayMode = displayMode;
  },
  // change pokeman details with change in isFavorite property
  toggleFavouritePokemon(state, pokemon) {
    state.pokedexs.map(pokedex => {
      if (pokedex.id === pokemon.id) {
        pokedex.isFavorite = pokemon.isFavorite;
      }
    });
  }
};
