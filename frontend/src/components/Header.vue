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
      <Filters></Filters>
      <router-view />
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
  }),
};
</script>
