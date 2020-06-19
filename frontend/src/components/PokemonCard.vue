<template>
  <div>
    <md-card>
      <md-card-area md-inset class="card--area">
        <md-card-media class="card--media" v-on:click.native="openDialog">
          <img
            :src="pokemonDetails.image"
            :alt="pokemonDetails.name"
            class="card--image"
          />
        </md-card-media>

        <md-card-header class="card--header">
          <div class="card--title">
            <h2 class="md-title">{{ pokemonDetails.name }}</h2>
            <span class="fxFlex"></span>
            <md-icon
              class="card--favorite-icon"
              :class="{ isfavorite: pokemonDetails.isFavorite }"
              v-on:click.native="toggleFavourite"
              >favorite</md-icon
            >
          </div>
          <div class="md-subhead" v-if="pokemonDetails.types">
            <md-icon>location_on</md-icon>
            <span>{{ pokemonDetails.types.join(", ") }}</span>
          </div>
        </md-card-header>
      </md-card-area>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card,
.card--area {
  width: 100%;
  height: 100%;
}
.md-card {
  display: inline-block;
  vertical-align: top;
}
.card--media {
  width: 100%;
  height: 77%;
}
.card--image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}
.card--header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #d6ddf4;
  margin: 0 !important;
  padding: 8px !important;
  .card--title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    h2 {
      font-size: 1.5em;
    }
    .fxFlex {
      flex-grow: 2;
    }
    .card--favorite-icon {
      margin: auto 4px !important;
    }
  }
  .md-subhead {
    .md-icon {
      $size: 1em;
      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      font-size: 1em;
      vertical-align: middle;
    }
  }
}
</style>
<script>
import { mapActions } from "vuex";

export default {
  name: "PokemonCard",
  props: ["pokemonDetails", "displayMode"],
  methods: {
    toggleFavourite: function() {
      this.pokemonDetails.isFavorite = !this.pokemonDetails.isFavorite;
      this.toggleFavPokemon(this.pokemonDetails);
    },
    openDialog: function() {
      // eslint-disable-next-line no-console
      this.$router.push({
        name: "pokemon",
        params: { id: this.pokemonDetails.id },
      });
    },
    ...mapActions(["toggleFavPokemon"]),
  },
};
</script>
