import { createRouter, createWebHistory } from "vue-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import homePagePublic from "@/view/homePagePublic.vue";
import homePagePrivate from "@/view/homePagePrivate.vue";
import tutoUse from "@/view/tutoUse.vue";
import tutoSettings from "@/view/tutoSettings.vue";
import tutoService from "@/view/tutoService.vue";
import tutoInstallation from "@/view/tutoInstallation.vue";
import tutoExport from "@/view/tutoExport.vue";
import tutoEnding from "@/view/tutoEnding.vue";
import summaryPage from "@/view/summaryPage.vue";
import infosPage from "@/view/infosPage.vue";

const routes = [
  { path: "/", component: homePagePublic, name: "homePagePublic" },
  {
    path: "/homePagePrivate",
    component: homePagePrivate,
    name: "homePagePrivate",
  },
  { path: "/tutoUse", component: tutoUse, name: "tutoUse" },
  { path: "/tutoSettings", component: tutoSettings, name: "tutoSettings" },
  { path: "/tutoService", component: tutoService, name: "tutoService" },
  {
    path: "/tutoInstallation",
    component: tutoInstallation,
    name: "tutoInstallation",
  },
  { path: "/tutoExport", component: tutoExport, name: "tutoExport" },
  { path: "/tutoEnding", component: tutoEnding, name: "tutoEnding" },
  { path: "/summaryPage", component: summaryPage, name: "summaryPage" },
  { path: "/infosPage", component: infosPage, name: "infosPage" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
      };
    } else {
      return { top: 0 };
    }
  },
});

router.afterEach(() => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000);
});

export default router;
