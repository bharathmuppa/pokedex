<template>
  <div class="page-container">
    <md-toolbar class="md-medium md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <span class="md-title">Pokedex</span>
        </div>

        <div class="md-toolbar-section-end">
          <md-tabs class="md-primary ">
            <md-tab
              id="tab-home"
              md-label="Home"
              to="/"
              md-icon="home"
              exact
            ></md-tab>
            <md-tab
              id="tab-favorites"
              md-label="Favourites"
              to="/favorites"
              md-icon="favorite"
            >
            </md-tab>
          </md-tabs>
        </div>
      </div>
    </md-toolbar>

    <div>
      <Filters v-show="showFilter"></Filters>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Filters from "./Filters.vue";

export default {
  name: "Header",
  components: { Filters },
  data: () => ({
    menuVisible: false,
    showFilter: true,
  }),
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
