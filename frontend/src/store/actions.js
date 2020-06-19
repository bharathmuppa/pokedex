import graphqlClient from "../vue-apollo";
import gql from "graphql-tag";
import {
  pokemonDetails,
  toggleFavoritePokemon,
  allPokemons,
  pokemonTypes,
} from "../graphql/queries-store";

export const actions = {
  async fetchAllPokemons({ commit }) {
    const response = await graphqlClient.query({
      query: gql(allPokemons),
    });

    commit("setAllPokemons", response.data.allpokemons);
  },
  async fetchPokemon({ commit }, id) {
    const response = await graphqlClient.query({
      query: gql(pokemonDetails),
      variables: { id },
    });

    commit("setCurentPokemon", response.data.pokemonById);
  },
  async fetchAllPokemonTypes({ commit }) {
    const response = await graphqlClient.query({
      query: gql(pokemonTypes),
    });

    commit("setAllTypes", response.data.pokemonTypes);
  },
  async toggleFavPokemon({ commit }, pokemon) {
    const response = await graphqlClient.mutate({
      mutation: gql(toggleFavoritePokemon),
      variables: { id: pokemon.id },
    });

    commit("toggleFavouritePokemon", response.data.toggleFavoritePokemon);
  },
  async filterPokemonWithName({ commit }, name) {
    commit("changeSearchText", name);
  },
  async filterPokemonWithTypes({ commit }, types) {
    commit("changeSearchTypes", types);
  },
};
