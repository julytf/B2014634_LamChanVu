import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'

const pinia = createPinia()

// styles

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/styles/tailwind.css'

// mouting point for the whole app

import App from '@/App.vue'

// layouts

import Admin from '@/layouts/Admin.vue'
import Auth from '@/layouts/Auth.vue'

// views for Admin layout

// import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from '@/views/admin/Settings.vue'
import Tables from '@/views/admin/Tables.vue'
import Maps from '@/views/admin/Maps.vue'
import AdminLogin from '@/views/admin/AdminLogin.vue'
import Books from '@/views/admin/Books.vue'
import BookEdit from '@/views/admin/BookEdit.vue'
import BookCreate from '@/views/admin/BookCreate.vue'
import Orders from '@/views/admin/Orders.vue'
import OrderEdit from '@/views/admin/OrderEdit.vue'
import OrderCreate from '@/views/admin/OrderCreate.vue'
import Users from '@/views/admin/Users.vue'
import UserEdit from '@/views/admin/UserEdit.vue'
import UserCreate from '@/views/admin/UserCreate.vue'

// views for Auth layout

import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

// views without layouts

// import Landing from "@/views/Landing.vue";
import Cart from '@/views/Cart.vue'
import UserOrders from '@/views/Orders.vue'
import Index from '@/views/Index.vue'

// routes

const routes = [
  {
    path: '/admin',
    redirect: '/admin/books',
    component: Admin,
    children: [
      {
        path: '/admin/books/',
        component: Books,
      },
      {
        path: '/admin/books/create',
        component: BookCreate,
      },
      {
        path: '/admin/books/:id',
        component: BookEdit,
      },
      {
        path: '/admin/orders/',
        component: Orders,
      },
      {
        path: '/admin/orders/create',
        component: OrderCreate,
      },
      {
        path: '/admin/orders/:id',
        component: OrderEdit,
      },
      {
        path: '/admin/users/',
        component: Users,
      },
      {
        path: '/admin/users/create',
        component: UserCreate,
      },
      {
        path: '/admin/users/:id',
        component: UserEdit,
      },
      {
        path: '/admin/settings',
        component: Settings,
      },
      {
        path: '/admin/tables',
        component: Tables,
      },
      {
        path: '/admin/maps',
        component: Maps,
      },
    ],
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/register',
        component: Register,
      },
      {
        path: '/auth/admin/login',
        component: AdminLogin,
      },
    ],
  },
  // {
  //   path: "/landing",
  //   component: Landing,
  // },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/orders',
    component: UserOrders,
  },
  {
    path: '/',
    component: Index,
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(pinia).mount('#app')
