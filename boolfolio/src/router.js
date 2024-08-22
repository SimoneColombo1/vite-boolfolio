import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import ProjectList from "./pages/ProjectsList.vue";
import SingleProject from "./pages/SingleProject.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectList,
    },
    {
      path: "/projects/:id",
      name: "SingleProject",
      component: SingleProject,
    },
  ],
});
export { router };
