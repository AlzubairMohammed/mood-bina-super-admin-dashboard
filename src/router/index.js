import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrdersPage from '../views/OrdersPage.vue'
import SubCategory from '../views/SubCategory.vue'
import OrderDetails from '../views/OrderDetails.vue'
import EditProduct from '../views/EditProduct.vue'
import AddSubCategory from '../views/AddSubCategory.vue'
import CategoryPage from '../views/CategoryPage.vue'
import AddCategory from '../views/AddCategory.vue'
import EditCategory from '../views/EditCategory.vue'
import UsersPage from '../views/UsersPage.vue'
import AddUser from '../views/AddUser.vue'
import EditUser from '../views/EditUser.vue'
import PaymentsPage from '../views/PaymentsPage.vue'
import PaymentsDetails from '../views/PaymentsDetails.vue'
import LastPayments from '../views/LastPayments.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/OrdersPage",
    name:"OrdersPage",
    component:OrdersPage,
  },
  {
    path:"/OrderDetails",
    name:"OrderDetails",
    component:OrderDetails
  },
  {
    path:"/SubCategory",
    name:"SubCategory",
    component:SubCategory
  },
  {
    path:"/CategoryPage",
    name:"CategoryPage",
    component:CategoryPage
  },
  {
    path:"/AddSubCategory",
    name:"AddSubCategory",
    component:AddSubCategory
  },
  {
    path:"/AddCategory",
    name:"AddCategory",
    component:AddCategory
  },
  {
    path:"/EditCategory",
    name:"EditCategory",
    component:EditCategory
  },
  {
    path:"/EditProduct",
    name:"EditProduct",
    component:EditProduct
  },
  {
    path:"/UsersPage",
    name:"UsersPage",
    component:UsersPage
  },
  {
    path:"/AddUser",
    name:"AddUser",
    component:AddUser
  },
  {
    path:"/EditUser",
    name:"EditUser",
    component:EditUser
  },
  {
    path:"/PaymentsPage",
    name:"PaymentsPage",
    component:PaymentsPage
  },
  {
    path:"/PaymentsDetails",
    name:"PaymentsDetails",
    component:PaymentsDetails
  },
  {
    path:"/LastPayments",
    name:"LastPayments",
    component:LastPayments
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
