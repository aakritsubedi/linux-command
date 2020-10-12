import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
import Intro from "@/views/Intro";
import Terminal from "@/views/Terminal";


const routes = [
  {
    path: "/",
    name: "Terminal",
    component: Terminal,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
