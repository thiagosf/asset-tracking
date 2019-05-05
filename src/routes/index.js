import { Landing } from '../components/Landing'
import { Login } from '../components/Login'

export default {
  routes: [{
    name: 'home',
    path: '/',
    component: Landing
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }, {
    name: 'createAccount',
    path: '/create-account',
    component: Login
  }, {
    name: 'forgetPassword',
    path: '/forget-password',
    component: Login
  }]
}
