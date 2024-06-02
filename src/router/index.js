import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import MyProfile from '../pages/MyProfile.vue'
import Photos from '../pages/Photos.vue'
import ContactUs from '../pages/ContactUs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/my-profile', component: MyProfile },
  { path: '/photos', component: Photos },
  { path: '/contact-us', component: ContactUs }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
