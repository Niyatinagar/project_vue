import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import AuthorPage from '../views/AuthorPage.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import CoursePage from '../views/CoursePage.vue'
import CourseDetail from '../views/CourseDetail.vue'
import CreateCourse from '../views/dashboard/CreateCourse.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/courses',
    name: 'CoursePage',
    component: CoursePage
  },
  {
    path: '/courses/:slug',
    name: 'CourseDetail',
    component: CourseDetail
  },
  {
    path: '/authors/:id',
    name: 'Author',
    component: AuthorPage
  },
  {
    path: '/dashboard/create-course',
    name: 'CreateCourse',
    component: CreateCourse
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
