<template>
  <div>
    <md-list class="md-double-line list-container">
      <md-list-item v-on:click.prevent="openDetails">
        <md-avatar>
          <img :src="pokemonDetails.image" :alt="pokemonDetails.name" />
        </md-avatar>

        <div class="md-list-item-text">
          <span>{{ pokemonDetails.name }}</span>
          <p>{{ pokemonDetails.types.join(", ") }}</p>
        </div>

        <md-button
          class="md-icon-button md-list-action"
          @click.prevent="toggleFavourite"
        >
          <md-icon :class="{ isfavorite: pokemonDetails.isFavorite }"
            >favorite</md-icon
          >
        </md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<style lang="css" scoped>
.list-container {
  width: 100%;
  height: 100%;
}
</style>
<script>
/**
 * This component represent Functionality and UI for list view of Pokemon
 * @PokemonList
 * @props
 * @pokemonDetails {Object} details of the pokemon
 */
import { mapActions } from "vuex";

export default {
  name: "PokemonList",
  props: ["pokemonDetails"],
  methods: {
    toggleFavourite: function(event) {
      event.stopPropagation();
      this.pokemonDetails.isFavorite = !this.pokemonDetails.isFavorite;
      this.toggleFavPokemon(this.pokemonDetails);
    },
    openDetails: function() {
      this.$router.push({
        name: "pokemon",
        params: { id: this.pokemonDetails.id }
      });
    },
    ...mapActions(["toggleFavPokemon"])
  }
};
</script>
