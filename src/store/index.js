import Vue from 'vue'
import Vuex from 'vuex'
// 載入user API
import userAPI from '../apis/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account: '',
      name: '',
      avatar: '',
      introduction: '',
      cover: '',
      createdAt: '',
      updatedAt: '',
      role: '' // isAdmin的意思
    },
    isAuthenticated: false,
    // 儲存token
    token: ''
  },
  mutations: {
    // 同步 only
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser() {
      try {
        const { data } = await userAPI.getCurrent({})
        const {
          id,
          account,
          name,
          avatar,
          introduction,
          cover,
          createdAt,
          updatedAt,
          role // isAdmin的意思
        } = data.data

        // 呼叫 mutations
        this.commit('setCurrentUser', {
          id,
          account,
          name,
          avatar,
          introduction,
          cover,
          createdAt,
          updatedAt,
          role
        })
        return true
      } catch (error) {
        console.error('can not fetch user information')
        console.log('error', error)
        return false
      }
    }
  },
  modules: {}
})
