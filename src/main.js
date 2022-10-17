import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.mixin({
  methods: {
    gSelector (selector, parent = document) {
      return parent.querySelector(selector);
    },
    gSelectorAll (selector, parent = document) {
      return [...parent.querySelectorAll(selector)];
    },
    getFirst (array, unit = 1) {
      if (unit === 1) return array[0];
      return array.filter((_, index) => index < unit);
    },
    getLast (array, unit = 1) {
      if (unit === 1) return array[array.length - 1];
      return array.filter((_, index) => array.length - index <= unit);
    },
    getOnly (array, key) {
      return array.map(element => element[key]);
    },
    groupBy (array, key) {
      return array.reduce((group, element) => {
        const keyValue = element[key];
        return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] }
      }, {});
    },
    formatNumber (number) {
      const numberFormatter = new Intl.NumberFormat(undefined);
      return numberFormatter.format(number);
    },
    formatCurrency (number) {
      const currencyFormatter = new Intl.NumberFormat(undefined, { currency: "USD", style: "currency" });
      return currencyFormatter.format(number);
    },
    formatCompactNumber (number) {
      const compactNumberFormatter = new Intl.NumberFormat(undefined, { notation: "compact" });
      return compactNumberFormatter.format(number);
    },
    createUniqueID () {
      return (Math.random().toString(36) + Date.now().toString(36)).substring(2);
    },
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
