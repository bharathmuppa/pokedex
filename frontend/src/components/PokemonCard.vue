<template>
  <md-card class="md-card-example">
    <md-card-area md-inset>
      <md-card-media md-ratio="16:9">
        <img :src="pokemonDetails.imgUrl" :alt="pokemonDetails.name" />
      </md-card-media>

      <md-card-header class="card--header">
        <div class="card--title">
          <h2 class="md-title">{{ pokemonDetails.name }}</h2>
          <md-icon
            class="card--favorite-icon"
            :class="{ isfavorite: pokemonDetails.isFavorite }"
            v-on:click.native="toggleFavourite"
            >favorite</md-icon
          >
        </div>
        <div class="md-subhead">
          <md-icon>location_on</md-icon>
          <span>2 miles</span>
        </div>
      </md-card-header>
    </md-card-area>
  </md-card>
</template>

<style lang="scss" scoped>
.isfavorite {
  color: red !important;
}

.md-card {
  width: 16rem;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}

.card--header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .card--title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    .card--favorite-icon {
      margin: auto 0  !important;
    }
  }
  .md-subhead {
    .md-icon {
      $size: 16px;
      width: $size;
      min-width: $size;
      height: $size;
      font-size: $size !important;
    }

    span {
      vertical-align: middle;
    }
  }
}
</style>
<script>
export default {
  name: "PokemonCard",
  props: ["pokemonDetails", "displayMode"],
  methods: {
    toggleFavourite: function() {
      this.pokemonDetails.isFavorite = !this.pokemonDetails.isFavorite;
    },
  },
};
</script>
