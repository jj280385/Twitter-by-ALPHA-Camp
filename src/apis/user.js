import { apiHelper } from '../utils/helper.js'

export default {
  // 取得帳戶資料
  getAccount() {
    return apiHelper.get('./users/account')
  },

  // 修改帳戶資料
  editAccount({ account, name, email, password }) {
    return apiHelper.put('/users/account/setting', {
      account,
      name,
      password,
      email
    })
  },

  getUserTweetList(id) {
    // console.log('id',id)
    return apiHelper.get(`users/${id}/tweets`)
  },

  getUserReplyList(id) {
    // console.log('id',id)
    return apiHelper.get(`users/${id}/replied_tweets`)
  },
  
  getUserLikeList(id) {
    // console.log('id',id)
    return apiHelper.get(`/users/${id}/likes`)
  },

  getUsersTop() {
    return apiHelper.get('/users/top')
  }
}
