import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutMeView from "../views/AboutMeView.vue";
import ProjectView from "../views/ProjectView.vue";

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutMeView },
    { path: '/projects', name: 'projects', component: ProjectView },
]

const router = createRouter({
    history: createWebHistory('/Portfolio/'),
    routes,
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' }
    }
});

export default router;
