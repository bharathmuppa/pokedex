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
        <md-option value="fight-club">Fight Club</md-option>
        <md-option value="godfather">Godfather</md-option>
        <md-option value="godfather-ii">Godfather II</md-option>
        <md-option value="godfather-iii">Godfather III</md-option>
        <md-option value="godfellas">Godfellas</md-option>
        <md-option value="pulp-fiction">Pulp Fiction</md-option>
        <md-option value="scarface">Scarface</md-option>
      </md-select>
    </md-field>
  </md-toolbar>
</template>

<style scoped>
.md-toolbar-form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.md-toolbar-form .search {
  width: 50%;
}
.md-toolbar-form .pokedex--items {
  width: 15%;
}
</style>
<script>
export default {
  name: "Filters",
  data: () => ({
    selectedPokedex: "",
    selectedType: [],
  }),
  watch: {
    selectedPokedex: function(val) {
      // eslint-disable-next-line no-console
      console.log(val);
    },
    selectedType: function(val) {
      // eslint-disable-next-line no-console
      console.log(val);
    },
  },
};
</script>
