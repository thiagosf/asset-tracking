import {
  Landing,
  Login
} from '../components/pages'

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
