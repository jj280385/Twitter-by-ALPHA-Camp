import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import UserRegist from '../views/UserRegist.vue'
import UserSetting from '../views/UserSetting.vue'
import UserLogin from '../views/UserLogin.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Main from '../views/Main.vue'
import MainReply from '../views/MainReply.vue'
import Profile from '../views/Profile.vue'
import ProfileReply from '../views/ProfileReply.vue'
import ProfileLike from '../views/ProfileLike.vue'
import ProfileFollower from '../views/ProfileFollower.vue'
import ProfileFollowing from '../views/ProfileFollowing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: UserLogin
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  },
  {
    path: '/main/reply',
    name: 'main-reply',
    component: MainReply
  },
  {
    path: '/regist',
    name: 'user-regist',
    component: UserRegist
  },
  {
    path: '/login',
    name: 'user-login',
    component: UserLogin
  },
  {
    path: '/setting',
    name: 'user-setting',
    component: UserSetting
  },
  {
    path: '/admin',
    name: 'admin-login',
    component: AdminLogin
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/profile/tweet',
    name: 'profile-tweet',
    component: Profile
  },
  {
    path: '/profile/reply',
    name: 'profile-reply',
    component: ProfileReply
  },
  {
    path: '/profile/like',
    name: 'profile-like',
    component: ProfileLike
  },
  {
    path: '/profile/follower',
    name: 'profile-follower',
    component: ProfileFollower
  },
  {
    path: '/profile/following',
    name: 'profile-following',
    component: ProfileFollowing
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
