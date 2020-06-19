import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css"; // This line here
import { apolloClient } from "./vue-apollo";
import VueApollo from "vue-apollo";

Vue.use(VueMaterial);
Vue.use(VueApollo);

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
