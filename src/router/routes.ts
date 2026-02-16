import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'to-do', component: () => import('pages/TasksPage.vue') },
      { path: 'habits', name: 'habits', component: () => import('pages/WipPage.vue') },
      { path: 'gratitude', name: 'gratitude', component: () => import('pages/WipPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
