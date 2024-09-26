import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import io from "socket.io-client";
import VueSocketIOExt from "vue-socket.io-extended";

const socket = io("http://socketserver.com:3000");

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  // @ts-ignore
  VueSocketIOExt,
  socket,
  render: h => h(App)
}).$mount("#app");
