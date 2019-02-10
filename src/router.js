import Vue from "vue";
import Router from "vue-router";
import Catalog from "./views/Catalog.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: Catalog
    },
    {
      path: "/comments",
      name: "comments",
      component: () =>
        import("./views/Comments.vue")
    }
  ]
});
