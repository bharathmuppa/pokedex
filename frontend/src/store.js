import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokedexs: [
      {
        id: 1,
        name: "Bharath",
        imgUrl: "https://vuematerial.io/assets/examples/card-example.jpg",
        isFavorite: false,
      },
      {
        id: 2,
        name: "Bharath",
        imgUrl: "https://vuematerial.io/assets/examples/card-example.jpg",
        isFavorite: false,
      },
    ],
    searchPokedexText: "",
  },
  getters: {
    allPokemons: state => state.pokedexs,
    favPokemons: state => state.pokedexs.filter(pokemon => pokemon.isFavorites),

  },
  mutations: {},
  actions: {},
});
