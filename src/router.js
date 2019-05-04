import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (to.hash === "#top") {
        return { x: 0, y: 0 };
      } else {
        return {
          selector: to.hash
        };
      }
    }
  }
});
export default router;
