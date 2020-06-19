<template>
  <md-toolbar class=" md-medium md-toolbar-form" md-elevation="2">
    <md-field class="search">
      <label>Search Pokedex</label>
      <md-input v-model="selectedPokedex"></md-input>
    </md-field>
    <md-field class="pokedex--items">
      <label for="pokedexTypes">Movies</label>
      <md-select
        v-model="selectedType"
        name="pokedexTypes"
        id="pokedexTypes"
        multiple
        md-dense
      >
        <md-option
          :value="types"
          v-for="(types, index) in pokemonTypes"
          :key="index"
          >{{ types }}</md-option
        >
      </md-select>
    </md-field>
    <span class="fxFlex"></span>
    <md-icon class="view--module">view_module</md-icon>
    <md-icon class="view--list">list</md-icon>
  </md-toolbar>
</template>

<style scoped>
.md-toolbar-form {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.md-toolbar-form .search {
  width: 50%;
  margin-right: 1rem;
}
.md-toolbar-form .pokedex--items {
  width: 15%;
}
.fxFlex {
  flex-grow: 2;
}
.view--list,
.view--module {
  margin-left: 1rem;
  font-size: 32px !important;
}
</style>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Filters",
  data: () => ({
    selectedPokedex: "",
    selectedType: [],
  }),
  watch: {
    selectedPokedex: function(val) {
      // eslint-disable-next-line no-console
      this.filterPokemonWithName(val);
    },
    selectedType: function(val) {
      // eslint-disable-next-line no-console
      this.filterPokemonWithTypes(val);
    },
  },
  computed: {
    ...mapState(["pokemonTypes"]),
  },
  methods: {
    ...mapActions(["filterPokemonWithTypes", "filterPokemonWithName"]),
  },
};
</script>
