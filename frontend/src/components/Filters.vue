<template>
  <md-toolbar class="md-medium md-toolbar-form" md-elevation="2">
    <md-field class="pokemon-name">
      <label>Search Pokedex</label>
      <md-input v-model="pokemonName"></md-input>
    </md-field>
    <md-field class="pokemon-types">
      <label for="pokemonCategoryTypes">Type</label>
      <md-select
        v-model="pokemonType"
        name="pokemonCategoryTypes"
        id="pokemonCategoryTypes"
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
    <md-button
      class="view--module md-icon-button md-dense "
      :class="[isItAGrid ? 'md-primary' : '']"
      @click="changeDisplayMode('grid')"
    >
      <md-icon>view_module</md-icon>
    </md-button>
    <md-button
      class="md-icon-button md-dense"
      :class="[isItAList ? 'md-primary' : '']"
      @click="changeDisplayMode('list')"
    >
      <md-icon>list</md-icon>
    </md-button>
  </md-toolbar>
</template>

<style scoped>
.md-toolbar-form {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.md-toolbar-form .pokemon-name {
  width: 50%;
  margin-right: 1rem;
}
.md-toolbar-form .pokemon-types {
  width: 15%;
}
.fxFlex {
  flex-grow: 2;
}
</style>
<script>
/**
 * This component is responsible for handling poke name and type search
 * @Filters
 */
import { mapActions, mapState } from "vuex";

export default {
  name: "Filters",
  /**
   * @pokemanName stores model value for name field
   * @pokemonTypes store model value for type field
   */
  data: () => ({
    pokemonName: "",
    pokemonType: []
  }),
  watch: {
    /**
     * Watches for pokemon field name changes and triggers the store action
     */
    pokemonName: function(val) {
      // TODO: Add throttle time to make search more predictable and stable(Increases performance)
      this.filterPokemonWithName(val);
    },
    /**
     * Watches for pokemon types field changes
     */
    pokemonType: function(val) {
      this.filterPokemonWithTypes(val);
    },
    /**
     * Watch the route on every change and reset the filters
     */
    $route: function() {
      this.resetData();
      this.filterPokemonWithName("");
      this.filterPokemonWithTypes([]);
    }
  },
  computed: {
    /**
     * PokemonTypes is collection of all types of pokemons,
     * displayMode is state representation of view preference
     */
    ...mapState(["pokemonTypes", "displayMode"]),
    isItAGrid() {
      return this.displayMode === "grid";
    },
    isItAList() {
      return this.displayMode === "list";
    }
  },
  methods: {
    ...mapActions([
      "filterPokemonWithTypes",
      "filterPokemonWithName",
      "changePokemonDisplayMode"
    ]),
    /**
     * This function helps in choosing view modes
     * @changeDisplayMode
     * @params
     * @displayMode {string}
     */
    changeDisplayMode: function(displayMode) {
      // Change this displayModes propety to be constant
      this.changePokemonDisplayMode(displayMode);
    },
    /**
     * reset the data state of components
     * @resetData
     */
    resetData: function() {
      this.pokemonName = "";
      this.pokemonType = [];
    }
  }
};
</script>
