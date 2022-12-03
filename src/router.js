import { createWebHashHistory, createRouter } from 'vue-router';
import NotFound from "@/components/NotFound.vue";
import Home from '@/components/Home.vue';
import BlogPage from '@/components/BlogPage.vue';
import LibraryPage from '@/components/LibraryPage.vue';
import BlogContentPage from '@/components/BlogContentPage.vue';
import AlbumPage from '@/components/AlbumPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
  }, {
    path: '/blog/:id',
    name: 'BlogContent',
    component: BlogContentPage,
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