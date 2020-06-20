<template>
  <PokemonDetails :pokemon="currentPokemon"></PokemonDetails>
</template>

<script>
/**
 * This is a Smart Component which acts as container for Pokemon Details,
 * it fetch data required for this view and pass it to child components if required.
 * @Details
 */

import PokemonDetails from "../components/PokemonDetails";
import { mapActions, mapState } from "vuex";

export default {
  name: "Details",
  components: {
    PokemonDetails
  },
  computed: {
    ...mapState(["currentPokemon"])
  },
  created() {
    this.fetchPokemon(this.$route.params.id);
  },
  methods: { ...mapActions(["fetchPokemon"]) },
  watch: {
    "$route.params.id": function(id) {
      // Fetch deatials of pokemon with id, which is obtained from route params
      this.fetchPokemon(id);
    }
  }
};
</script>
