<template>
  <div>
    <PokemonViewSwitcher
      :displayMode="displayMode"
      :pokemons="allPokemonsFilter"
    ></PokemonViewSwitcher>
  </div>
</template>

<script>
/**
 * This is a Smart Component which acts as container for Favorites pokemons,
 * it fetch data required for this view and pass it to child components if required.
 * @Favorites
 */

import PokemonViewSwitcher from "../components/PokemonViewSwitcher.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Favorites",
  components: {
    PokemonViewSwitcher
  },
  computed: {
    ...mapState(["searchPokedexText", "searchPokedexTypes", "displayMode"]),
    ...mapGetters(["favPokemons"]),
    /**
     * Gets complete favorite pokemons list and filter based on searched text and selected types
     * it has 3 steps
     * 1. First get all pokemons and filter by name searched
     * 2. resultant pokemons list will be further filtered out by type selected
     * 3. return result
     */
    allPokemonsFilter() {
      let pokemons = this.favPokemons;
      //TODO: Need to find out generic query builder, if in case we add more filters.
      if (this.searchPokedexText) {
        pokemons = this.getPokemonsListBasedOnName(
          pokemons,
          this.searchPokedexText
        );
      }
      if (this.searchPokedexTypes && this.searchPokedexTypes.length > 0) {
        pokemons = this.getPokemonsListBasedOnTypes(
          pokemons,
          this.searchPokedexTypes
        );
      }
      return pokemons;
    }
  },
  methods: {
    /**
     * Helper function to filter pokemons list by types
     */
    getPokemonsListBasedOnTypes: (pokemonsList, types) => {
      return pokemonsList.filter(pokemon => {
        if (!types.some(val => pokemon.types.indexOf(val) === -1)) {
          return true;
        }
      });
    },

    /**
     * Helper function to filter pokemons list by name
     */
    getPokemonsListBasedOnName: (pokemonsList, name) => {
      return pokemonsList.filter(pokemon => {
        if (
          pokemon.name &&
          pokemon.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        ) {
          return true;
        }
      });
    }
  }
};
</script>
