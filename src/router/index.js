import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import UserLogin from '../views/UserLogin.vue'
import AdminLogin from '../views/AdminLogin.vue'
import OtherUserPost from '../views/OtherUserPost.vue'

// 載入 Ｖuex方法
import store from '../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'admin') {
    next('/not-found')
    return
  }
  next()
}

const authorizeIsUser = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== 'user') {
    next('/admin')
    return
  }
  next()
}

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
    component: () => import('../views/Main.vue'),
    beforeEnter: authorizeIsUser
  },
  {
    path: '/regist',
    name: 'user-regist',
    component: () => import('../views/UserRegist.vue'),
  },
  {
    path: '/setting',
    name: 'user-setting',
    component: () => import('../views/UserSetting.vue'),
    beforeEnter: authorizeIsUser
  },
  {
    path: '/admin',
    name: 'admin-login',
    component: AdminLogin
  },
  {
    path: '/admin/main',
    name: 'admin-main',
    component: () => import('../views/AdminMain.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/profile',
    component: () => import('../views/Profile.vue'),
    beforeEnter: authorizeIsUser,
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
        path: '',
        redirect: '/profile/tweet'
      }
    ]
  },
  {
    path: '/users/:id',
    component: () => import('../views/OtherUserProfile.vue'),
    beforeEnter: authorizeIsUser,
    children: [
      {
        path: 'tweet',
        name: 'user-tweet',
        component: () => import('../components/OtherUserTweet.vue')
      },
      {
        path: 'reply',
        component: () => import('../components/OtherUserReplyList.vue')
      },
      {
        path: 'like',
        component: () => import('../components/OtherUserLikeList.vue')
      },
      {
        path: '',
        redirect: '/users/:id/tweet'
      }
    ]
  },
  {
    path: '/tweets/:tweetId',
    name: 'other-tweet',
    component: OtherUserPost,
    beforeEnter: authorizeIsUser
  },
  {
    path: '/user/:id/follower',
    name: 'user-follower',
    component: () => import('../views/ProfileFollower.vue'),
    beforeEnter: authorizeIsUser
  },
  {
    path: '/user/:id/following',
    name: 'user-following',
    component: () => import('../views/ProfileFollowing.vue'),
    beforeEnter: authorizeIsUser
  },
  {
    // 其他使用者
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/Profile.vue'),
    beforeEnter: authorizeIsUser
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

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  const tokenInStore = store.state.token

  let isAuthenticated = store.state.isAuthenticated

  // 有 token 的情況下，才向後端驗證
  if (token && token !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  const whiteList = ['user-login', 'user-regist', 'admin-login']

  // 若 token 無效，則轉址到登入頁
  if (!isAuthenticated && !whiteList.includes(to.name)) {
    next('/login')
    return
  }

  // 若 token 有效，則轉址到首頁
  if (isAuthenticated && whiteList.includes(to.name)) {
    next('/main')
    return
  }

  next()
})

export default router
