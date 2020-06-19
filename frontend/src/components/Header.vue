<template>
  <div class="page-container">
    <md-toolbar class="md-medium md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <img src="../assets/pokeball.svg" class="brand-icon" />

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
  </div>
</template>
<style scoped>
.brand-icon {
  width: 32px;
}
</style>
<script>
export default {
  name: "Header",

  data: () => ({
    menuVisible: false,
  }),
};
</script>
