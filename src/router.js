import { createRouter, createWebHistory } from "vue-router";
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
  { path: "/", component: homePagePrivate, name: "homePagePrivate" },

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
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
