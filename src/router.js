import { createWebHashHistory, createRouter } from 'vue-router';
import NotFound from "@/components/NotFound.vue";
import Home from '@/components/Home.vue';
import LibraryPage from '@/components/LibraryPage.vue';
import AlbumPage from '@/components/AlbumPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/library',
    name: 'Library',
    component: LibraryPage,
  }, {
    path: '/album',
    name: 'Album',
    component: AlbumPage,
  },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;