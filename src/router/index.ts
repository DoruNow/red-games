import Vue from "vue";
import VueRouter from "vue-router";
import LicitatiiView from "../views/LicitatiiView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/licitatii"
  },
  {
    path: "/licitatii",
    component: LicitatiiView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
