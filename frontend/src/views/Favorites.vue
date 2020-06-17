<template>
  <div class="pokemon-list">
    <div v-for="pokemon in favPokemons" :key="pokemon.id" >
      <PokemonCard :pokemonDetails="pokemon" :display="'list'"></PokemonCard>
    </div>
  </div>
</template>

<style scoped>
.pokemon-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1rem;
}
</style>
<script>
import PokemonCard from "../components/PokemonCard";
import { mapGetters } from "vuex";

export default {
  name: "Favorites",
  components: {
    PokemonCard,
  },
  computed: mapGetters(["favPokemons"]),
};
</script>
