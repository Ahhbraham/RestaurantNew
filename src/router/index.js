import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import About_Us from '@/components/About_Us.vue'
import Booking_S from '@/components/Booking_S.vue'
import Contact_Contact from '@/components/Contact_Contact.vue'
import Feed_back from '@/components/Feed_back.vue'
import Menu_Menu from '@/components/Menu_Menu.vue'
import Order_Order from '@/components/Order_Order.vue'
import Restaurant_List from '@/components/Restaurant_List.vue'



//We're creating an array thats why we're using the [] brackets
const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/About',
    component: About_Us
  },
  {
    path:'/Contact',
    component: Contact_Contact
  },
  {
    path:'/Bookings',
    component: Booking_S
  },
  {
    path:'/Feedback',
    component: Feed_back
  },
  {
    path:'/Menu',
    component: Menu_Menu
  },
  {
    path:'/Order',
    component: Order_Order
  },
  {
    path:'/Restaurant_List',
    component: Restaurant_List
  },
  





]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router