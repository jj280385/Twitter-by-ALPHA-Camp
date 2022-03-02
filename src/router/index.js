import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import UserRegist from '../views/UserRegist.vue'
import UserSetting from '../views/UserSetting.vue'
import UserLogin from '../views/UserLogin.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Main from '../views/Main.vue'
import OtherUserPost from '../views/OtherUserPost.vue'

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
    path: '/tweets/:tweetId',
    name: 'other-tweet',
    component: OtherUserPost
  },
  {
    path: '/profile',
    // name: 'profile',
    component: () => import('../views/Profile.vue'),
    children: [
      {
        path: 'tweet',
        component: () => import('../components/ProfileTweetList.vue')
      },
      {
        path: 'reply',
        component: () => import('../components/ProfileReplyList.vue')
      },
      {
        path: 'like',
        component: () => import('../components/ProfileLikeList.vue')
      },
      {
        path: '/',
        redirect: '/profile/tweet'
      }
    ]
  },
  {
    path: '/users/:id',
    component: () => import('../views/OtherUserProfile.vue'),
    children: [
      {
        path: 'tweet',
        component: () => import('../views/OtherUserProfile.vue')
      },
      {
        path: 'reply',
        component: () => import('../views/OtherUserReply.vue')
      },
      {
        path: 'like',
        component: () => import('../views/OtherUserLike.vue')
      },
      // {
      //   path: 'post',
      //   component: () => import('../views/OtherUserPost.vue')
      // },
      {
        path: '/',
        redirect: '/users/:id/tweet'
      }
    ]
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
