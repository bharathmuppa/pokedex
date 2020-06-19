<template>
  <div class="pokemon-list">
    <PokemonCard
      :pokemonDetails="pokemon"
      :display="'list'"
      v-for="pokemon in favPokemons"
      :key="pokemon.id"
      class="card"
    ></PokemonCard>
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
.pokemon-list .card {
  width: 16rem;
  height: 300px;
  margin: 1rem;
}
</style>
<script>
import PokemonCard from "../components/PokemonCard";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Favorites",
  components: {
    PokemonCard,
  },
  computed: {
    ...mapState(["searchPokedexText", "searchPokedexTypes"]),
    ...mapGetters(["favPokemons"]),
     allPokemonsFilter() {
      let pokemons = this.favPokemons;
      if (this.searchPokedexText) {
        pokemons = pokemons.filter((pokemon) => {
          if (
            pokemon.name &&
            pokemon.name
              .toLowerCase()
              .indexOf(this.searchPokedexText.toLowerCase()) > -1
          ) {
            return true;
          }
        });
      }
      if (this.searchPokedexTypes && this.searchPokedexTypes.length > 0) {
        pokemons = pokemons.filter((pokemon) => {
          if (
            !this.searchPokedexTypes.some(
              (val) => pokemon.types.indexOf(val) === -1
            )
          ) {
            return true;
          }
        });
      }
      return pokemons;
    },
  },
};
</script>
