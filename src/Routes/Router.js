import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../components/view/Home.vue') },
  { path: '/signup', component: () => import('../components/authentication/Signup.vue') },
  { path: '/login', component: () => import('../components/authentication/Login.vue') },
  { path: '/post', component: () => import('../components/post/Post.vue') },
  { path: '/post/:uuid', component: () => import('../components/post/ImageDetails.vue'), props: true },
  { path: '/about', component: () => import('../components/view/About.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../components/layout/NotFound.vue') },
  { path: '/account', component: () => import('../components/user/UserAccount.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router