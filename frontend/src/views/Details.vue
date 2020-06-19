<template>
  <PokemonDetails :pokemon="currentPokemon"></PokemonDetails>
</template>

<script>
import PokemonDetails from "../components/PokemonDetails";
import { mapActions, mapState } from "vuex";

export default {
  name: "Details",
  components: {
    PokemonDetails,
  },
  watch: {
    "$route.params.id": function(id) {
      this.fetchPokemon(id);
    },
  },

  methods: { ...mapActions(["fetchPokemon"]) },
  computed: {
    ...mapState(["currentPokemon"]),
  },
  created() {
    this.fetchPokemon(this.$route.params.id);
  },
};
</script>
