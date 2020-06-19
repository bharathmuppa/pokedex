<template>
  <div id="app">
    <Header></Header>
    <div>
      <Filters v-show="showFilter"></Filters>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Filters from "./components/Filters";
import { mapActions } from "vuex";
export default {
  name: "app",
  components: {
    Header, Filters
  },
   data: () => ({
    showFilter: true,
  }),
  methods: { ...mapActions(["fetchAllPokemons","fetchAllPokemonTypes"]) },
  created() {
    this.fetchAllPokemons();
    this.fetchAllPokemonTypes();
  },
   watch: {
    $route: function() {
      // Check if given route is true, if it is then hide Nav.
      // eslint-disable-next-line no-console
      console.log(this.$route);
      if (this.$route.name === "pokemon") {
        this.showFilter = false;
      } else {
        this.showFilter = true;
      }
    },
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
