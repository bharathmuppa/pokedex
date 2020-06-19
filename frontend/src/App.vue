<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from "./components/Header";
import { mapActions } from "vuex";
export default {
  name: "app",
  components: {
    Header,
  },
  methods: { ...mapActions(["fetchAllPokemons","fetchAllPokemonTypes"]) },
  created() {
    this.fetchAllPokemons();
    this.fetchAllPokemonTypes();
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body::-webkit-scrollbar {
  width: 2px;
  border-radius: 12px;
}
.isfavorite {
  color: red !important;
}
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px #25ddf5;
}

body::-webkit-scrollbar-thumb {
  width: 1px;
  background-color: #25ddf5;
  outline: 1px solid red;
}
</style>
