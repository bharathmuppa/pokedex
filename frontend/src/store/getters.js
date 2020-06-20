export const getters = {
  allPokemons: state => state.pokedexs,
  allPokemonTypes: state => state.pokemonTypes,
  favPokemons: state => state.pokedexs.filter(pokemon => pokemon.isFavorite),
  filteredText: state => state.searchPokedexText,
  filteredTypes: state => state.searchPokedexTypes
};
