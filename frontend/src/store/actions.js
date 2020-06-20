import graphqlClient from "../vue-apollo";
import gql from "graphql-tag";
import {
  pokemonDetails,
  toggleFavoritePokemon,
  allPokemons,
  pokemonTypes
} from "../graphql/queries-store";

export const actions = {
  // action  to get all the available pokemons with required fields and change the corresponfing state.
  async fetchAllPokemons({ commit }) {
    const response = await graphqlClient.query({
      query: gql(allPokemons)
    });

    commit("setAllPokemons", response.data.allpokemons);
  },
  // action  to get a specific pokemon details with required fields and set current pokemon state.
  async fetchPokemon({ commit }, id) {
    const response = await graphqlClient.query({
      query: gql(pokemonDetails),
      variables: { id }
    });

    commit("setCurentPokemon", response.data.pokemonById);
  },
  // action  to get all pokemon types and set types state.
  async fetchAllPokemonTypes({ commit }) {
    const response = await graphqlClient.query({
      query: gql(pokemonTypes)
    });

    commit("setAllTypes", response.data.pokemonTypes);
  },
  // action  to toggle pokemon isFavorite property and update coresponding pokemon state.
  async toggleFavPokemon({ commit }, pokemon) {
    const response = await graphqlClient.mutate({
      mutation: gql(toggleFavoritePokemon),
      variables: { id: pokemon.id }
    });

    commit("toggleFavouritePokemon", response.data.toggleFavoritePokemon);
  },
  // action  to get pokemons by name.
  async filterPokemonWithName({ commit }, name) {
    commit("changeSearchText", name);
  },
  // action  to get pokemons by type
  async filterPokemonWithTypes({ commit }, types) {
    commit("changeSearchTypes", types);
  },
  // action  to get pokemons by type
  async changePokemonDisplayMode({ commit }, displayMode) {
    commit("setDisplayMode", displayMode);
  }
};
