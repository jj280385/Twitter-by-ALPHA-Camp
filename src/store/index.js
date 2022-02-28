import Vue from 'vue'
import Vuex from 'vuex'

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
    isAuthenticated: false
  },
  mutations: {
    // 同步 only
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {},
  modules: {}
})
