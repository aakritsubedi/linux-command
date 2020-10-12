import { createRouter, createWebHistory } from "vue-router";

import Terminal from '@/views/Terminal';

const routes = [
  {
    path: "/",
    name: "Terminal",
    component: Terminal,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
