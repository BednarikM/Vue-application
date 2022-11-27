import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomePage.vue")
  },
  {
    path: "/home",
    name: "homeFull",
    component: () => import("../views/HomePage.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutPage.vue")
  },
  {
    path: "/form",
    name: "formAdd",
    component: () => import("../views/FormPage.vue")
  },
  {
    path: "/form/:id",
    name: "formEdit",
    component: () => import("../views/FormPage.vue")
  },
  {
    path: "/detail/:id",
    name: "taskDetail",
    component: () => import("../views/TaskDetailPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), routes
})

export default router