import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      // Added bacause of issue with vue material router configurations https://github.com/vuematerial/vue-material/issues/2069
      alias: "/tabs/*",
      component: Home
    },
    {
      path: "/pokemon/:id",
      name: "pokemon",
      component: () => import("./views/Details.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Favorites.vue")
    }
  ]
});
