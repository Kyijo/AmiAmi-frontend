import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component:()=> import('./pages/Home.vue') },
  { path: '/signin', component:()=> import('./pages/Signin.vue') },
  { path: '/login', component:()=> import('./pages/Login.vue') },
  { path: '/post', component:()=> import('./pages/Post.vue') },
  { path: '/about', component:()=> import('./pages/About.vue') },
  { path: '/contact', component:()=> import('./pages/Contact.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router