import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import Add_post from '../components/Add_post.vue'
import Edit_post from '../components/Edit_post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notes/:id',
      name: 'details',
      component: DetailsView
    },
    {
      path: '/addnotes',
      name: 'addpost',
      component: Add_post
    },
    {
      path: '/editnotes/:id',
      name: 'editnotes',
      component: Edit_post
    }
  ]
})

export default router
