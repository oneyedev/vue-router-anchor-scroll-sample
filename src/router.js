import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Smooth from "./views/Smooth.vue";

Vue.use(Router);

function moveByConstantSpeed(target, speed) {
  const step = (currentTime, prevTime) => {
    const deltaTime = currentTime - prevTime;
    const top = target.getBoundingClientRect().top;
    if (Math.abs(top) <= 1) return;
    if (top > 0) {
      const sc = document.scrollingElement;
      if (sc.scrollTop + sc.clientHeight === sc.scrollHeight) return;
      const deltaV = Math.min(deltaTime * speed, top);
      window.scrollBy(0, deltaV);
    } else {
      if (document.scrollingElement.scrollTop === 0) return;
      const deltaV = Math.max(-deltaTime * speed, top);
      window.scrollBy(0, deltaV);
    }
    window.requestAnimationFrame(nextTime => step(nextTime, currentTime));
  };
  window.requestAnimationFrame(currentTime =>
    step(currentTime, window.performance.now())
  );
}

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index",
      component: Index
    },
    {
      path: "/smooth",
      component: Smooth
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, reject) => {
        const target = document.querySelector(to.hash);
        try {
          if (target) {
            moveByConstantSpeed(target, 10);
          } else {
            reject(to.hash + "not exist");
          }
        } catch (error) {
          reject(error);
        }
      });
    }
  }
});
export default router;
