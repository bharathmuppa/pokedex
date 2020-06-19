<template>
  <div class="pokemon-details" v-if="pokemon">
    <md-card class="pokemon-details--card">
      <md-card-media-cover class="pokemon-details--card__meda-cover">
        <md-card-media>
          <img
            :src="pokemon.image"
            :alt="pokemon.name"
            class="pokemon-details--card__meda-img"
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
    <md-content class="pokemon-details--section-2 md-elevation-2 ">
      <div class="pokemon-details--section-2__header">
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
      <div class="progress-bar">
        <span></span>
        <md-progress-bar
          md-mode="determinate"
          :md-value="calcMaxCP"
        ></md-progress-bar>
      </div>
      <div class="progress-bar">
        <span></span>
        <md-progress-bar
          class="md-accent"
          md-mode="determinate"
          :md-value="calcMaxHP"
        ></md-progress-bar>
      </div>
    </md-content>

    <md-content class="pokemon-details--section3 md-elevation-2">
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
      class="pokemon-details--section4  md-elevation-2 "
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
.pokemon-details--card {
  max-width: 768px;
  width: 768px;
}
.pokemon-details--card__meda-cover {
  height: 400px;
}
.pokemon-details--card__meda-img {
  width: auto;
}
.pokemon-details .md-card {
  width: 100%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.pokemon-details--section-2 {
  width: 768px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem;
}
.pokemon-details--section-2__header {
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  align-items: center;
}
.pokemon-details--section3 {
  width: 768px;
  display: flex;
  flex-direction: row;
}
.pokemon-details--section3 > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
.pokemon-details--section3 > div:nth-child(1) {
  border-right: 2px solid #e5e4ef;
}
.pokemon-details--section3 > div > span {
  margin: 4px;
}
.progress-bar {
  width: 100%;
  margin: 1rem 0;
}
.pokemon-details--section-2,
.pokemon-details--section3 {
  background: #b8fdb8;
}
.pokemon-details--section4 {
  width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0.25rem 0;
  padding: 1rem;
}
.pokemon-details--section4 > span {
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
import { mapActions } from "vuex";
import PokemonCard from "./PokemonCard";

export default {
  name: "PokemonDetails",
  props: ["pokemon"],
  components: {
    PokemonCard,
  },
  computed: {
    calcMaxCP() {
      return (this.pokemon.maxCP * 100) / 5000;
    },
    calcMaxHP() {
      return (this.pokemon.maxHP * 100) / 5000;
    },
  },
  methods: {
    toggleFavourite: function() {
      this.pokemon.isFavorite = !this.pokemon.isFavorite;
      this.toggleFavPokemon(this.pokemon);
    },
    playSound() {
      if (this.pokemon.sound) {
        var audio = new Audio(this.pokemon.sound);
        audio.play();
      }
    },
    ...mapActions(["toggleFavPokemon"]),
  },
};
</script>
