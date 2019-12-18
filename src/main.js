import Vue from "vue";
import App from "./App.vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

Vue.config.productionTip = false;

extend("required", {
  ...required,
  message(field) {
    return `${field} is required`;
  }
});

// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  render: h => h(App)
}).$mount("#app");
