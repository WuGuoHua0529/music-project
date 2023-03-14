import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Preview from "../views/Preview.vue";
import Information from "../views/Information.vue";
import Notice from "../views/Notice.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Preview",
    name: "Preview",
    component: Preview,
  },
  {
    path: "/Information",
    name: "Information",
    component: Information,
  },
  {
    path: "/Notice",
    name: "Notice",
    component: Notice,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;