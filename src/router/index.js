import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import UserLogin from '../views/UserLogin.vue'
import AdminLogin from '../views/AdminLogin.vue'
import Main from '../views/Main.vue'


// 載入 Ｖuex方法
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: UserLogin
  },
  {
    path: '/login',
    name: 'user-login',
    component: UserLogin
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/regist',
    name: 'user-regist',
    component: () => import('../views/UserRegist.vue')
  },
  {
    path: '/setting',
    name: 'user-setting',
    component: () => import('../views/UserSetting.vue')
  },
  {
    path: '/admin',
    name: 'admin-login',
    component: AdminLogin
  },
  {

    path: '/admin/main',
    name: 'admin-main',
    component: () => import('../views/AdminMain.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/profile',
    name: 'profile',
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
    name: 'other-user',
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
      {
        path: 'post',
        component: () => import('../views/OtherUserPost.vue')
      },
      {
        path: '/',
        redirect: '/users/:id/tweet'
      }
    ]
  },
  {
    path: '/profile/follower',
    name: 'profile-follower',
    component: () => import('../views/ProfileFollower.vue')
  },
  {
    path: '/profile/following',
    name: 'profile-following',
    component: () => import('../views/ProfileFollowing.vue')
  },
  {
    // 其他使用者
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  // 網址與router-link目的地完全相同
  linkExactActiveClass: 'active',
  // 網址與router-link目的地完全相同
  linkActiveClass: 'active',
  routes
})

//  加在所有路由前
router.beforeEach((to, from, next) => {
  // 使用 dispatch 呼叫 Vuex 內的 actions
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
