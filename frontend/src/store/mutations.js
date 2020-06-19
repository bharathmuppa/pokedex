export const mutations = {
  setAllPokemons(state, pokemons) {
    state.pokedexs = pokemons;
  },
  setAllTypes(state, types) {
    state.pokemonTypes = types;
  },
  toggleFavouritePokemon(state, pokemon) {
    state.pokedexs.map((pokedex) => {
      if (pokedex.id === pokemon.id) {
        pokedex.isFavorite = pokemon.isFavorite;
      }
    });
  },
  changeSearchText(state, text) {
    state.searchPokedexText = text;
  },
  changeSearchTypes(state, types) {
    state.searchPokedexTypes = types;
  },
  setCurentPokemon(state, pokemon) {
    state.currentPokemon = pokemon;
  },
};
