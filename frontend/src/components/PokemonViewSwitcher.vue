<template>
  <div>
    <div class="pokemon-grid" v-if="displayMode === 'grid'">
      <PokemonCard
        :pokemonDetails="pokemon"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        class="card"
      ></PokemonCard>
    </div>
    <div class="pokemon-list" v-if="displayMode === 'list'">
      <PokemonList
        :pokemonDetails="pokemon"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        class="list md-elevation-2"
      ></PokemonList>
    </div>
  </div>
</template>

<style scoped>
.pokemon-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1rem;
}
.pokemon-grid .card {
  width: 16rem;
  height: 300px;
  margin: 1rem;
}
.pokemon-list {
  max-width: 786px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.pokemon-list .list {
  margin: 0.5rem 0 0 0;
}
</style>

<script>
/**
 * This component represent Logic to switch between list or Grid view of Pokemon
 * @PokemonViewSwitcher
 * @props
 * @displayMode {Object} model to store modes of Display
 * @pokemons {[Object]} list of all pokemons
 */

import PokemonCard from "../components/PokemonCard";
import PokemonList from "../components/PokemonList";

export default {
  name: "PokemonViewSwitcher",
  props: ["displayMode", "pokemons"],
  components: {
    PokemonCard,
    PokemonList
  }
};
</script>
