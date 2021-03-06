<template>
  <div class="pokemon-details" v-if="pokemon">
    <md-card class="pokemon-details-card">
      <md-card-media-cover class="pokemon-details-card--meda-cover">
        <md-card-media>
          <img
            :src="pokemon.image"
            :alt="pokemon.name"
            class="pokemon-details-card--meda-img"
          />
        </md-card-media>

        <md-card-area>
          <md-card-actions>
            <md-button
              class="md-icon-button md-primary"
              @click.prevent="playSound()"
            >
              <md-icon>volume_up</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
    <md-content class="pokemon-details-section-2 md-elevation-2 ">
      <div class="pokemon-details-section-2--header">
        <span class="md-title">{{ pokemon.name }}</span>
        <md-button class="md-icon-button">
          <md-icon
            class="card--favorite-icon"
            :class="{ isfavorite: pokemon.isFavorite }"
            v-on:click.native="toggleFavourite"
            >favorite</md-icon
          >
        </md-button>
      </div>
      <span class="md-caption">{{ pokemon.types.join(", ") }}</span>
      <div class="progress-bar-container">
        <md-progress-bar
          md-mode="determinate"
          class="progress-bar-container--bar"
          :md-value="calcMaxCP"
        ></md-progress-bar>
        <span class="progress-bar-container--sub-title"
          >CP: {{ pokemon.maxCP }}</span
        >
      </div>
      <div class="progress-bar-container">
        <md-progress-bar
          class="md-accent progress-bar-container--bar"
          md-mode="determinate"
          :md-value="calcMaxHP"
        ></md-progress-bar>
        <span class="progress-bar-container--sub-title"
          >HP: {{ pokemon.maxHP }}</span
        >
      </div>
    </md-content>

    <md-content class="pokemon-details-section-3 md-elevation-2">
      <div>
        <span class="md-title">Weight</span
        ><span class="md-caption"
          >{{ pokemon.weight.minimum }} - {{ pokemon.weight.maximum }}</span
        >
      </div>
      <div>
        <span class="md-title">Height</span
        ><span class="md-caption"
          >{{ pokemon.height.minimum }} - {{ pokemon.height.maximum }}</span
        >
      </div>
    </md-content>

    <md-content
      class="pokemon-details-section-4  md-elevation-2 "
      v-if="pokemon.evolutions && pokemon.evolutions.length > 0"
    >
      <span class="md-title">Evolutions</span>

      <div class="pokemon-list">
        <PokemonCard
          :pokemonDetails="poke"
          :display="'list'"
          v-for="poke in pokemon.evolutions"
          :key="poke.id"
          class="card"
        ></PokemonCard>
      </div>
    </md-content>
  </div>
</template>

<style lang="css" scoped>
.pokemon-details {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}
.pokemon-list .card {
  width: 10rem;
  height: 200px;
  margin: 8px;
}
.pokemon-details-card {
  max-width: 768px;
  width: 768px;
}
.pokemon-details-card--meda-cover {
  height: 400px;
}
.pokemon-details-card--meda-img {
  width: auto;
}
.pokemon-details .md-card {
  width: 100%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.pokemon-details-section-2 {
  width: 768px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem;
}
.pokemon-details-section-2--header {
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  align-items: center;
}
.pokemon-details-section-3 {
  width: 768px;
  display: flex;
  flex-direction: row;
}
.pokemon-details-section-3 > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
.pokemon-details-section-3 > div:nth-child(1) {
  border-right: 2px solid #e5e4ef;
}
.pokemon-details-section-3 > div > span {
  margin: 4px;
}
.progress-bar-container {
  width: 100%;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.progress-bar-container .progress-bar-container--bar{
   width: 85%;
}
.progress-bar-container--sub-title{
  font-size: 16px;
    font-weight: bolder;
   width: 10%;
}
.pokemon-details-section-2,
.pokemon-details-section-3 {
  background: #b8fdb8;
}
.pokemon-details-section-4 {
  width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0.25rem 0;
  padding: 1rem;
}
.pokemon-details-section-4 > span {
  text-align: left;
}
.pokemon-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1rem;
}
</style>

<script>
/**
 * This component renders view model of Pokeman details view.
 * @PokemonDetails
 * @props
 * @pokemon {Object} Whole pokemon object needed for rendering for component
 */
import { mapActions } from "vuex";
import PokemonCard from "./PokemonCard";

// TODO: Can be optimized into nuclear components
export default {
  name: "PokemonDetails",
  props: ["pokemon"],
  components: {
    PokemonCard
  },
  computed: {
    calcMaxCP() {
      return (this.pokemon.maxCP * 100) / 5000;
    },
    calcMaxHP() {
      return (this.pokemon.maxHP * 100) / 5000;
    }
  },
  methods: {
    /**
     * function to toggle isFavorite property of state
     * @playSound
     */
    toggleFavourite: function() {
      this.pokemon.isFavorite = !this.pokemon.isFavorite;
      this.toggleFavPokemon(this.pokemon);
    },
    /**
     * function to play sound of pokemon
     * @playSound
     */
    playSound() {
      if (this.pokemon.sound) {
        var audio = new Audio(this.pokemon.sound);
        audio.play();
      }
    },
    ...mapActions(["toggleFavPokemon"])
  }
};
</script>
