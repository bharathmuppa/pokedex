import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Material specific imports
import VueMaterial from "vue-material";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

// ApolloClient specific imports
import apolloClient from "./vue-apollo";
import VueApollo from "vue-apollo";

// Register required modules
Vue.use(VueMaterial);
Vue.use(VueApollo);

// configure it to true for prod release.
Vue.config.productionTip = true;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
