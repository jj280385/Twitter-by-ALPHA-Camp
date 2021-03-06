import { apiHelper } from '../utils/helper.js'

export default {
  // 取得當下帳戶資料
  getCurrent() {
    return apiHelper.get('/users/account')
  },

  getProfile({ userId }) {
    return apiHelper.get(`/users/${userId}`)
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
    return apiHelper.get(`users/${id}/tweets`)
  },

  getUserReplyList(id) {
    return apiHelper.get(`users/${id}/replied_tweets`)
  },
  
  getUserLikeList(id) {
    return apiHelper.get(`/users/${id}/likes`)
  },

  getUsersTop() {
    return apiHelper.get('/users/top')
  },

  // 修改個人資料（封面、頭像）
  editProfile({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },

  getUserFollowers(userId) {
    return apiHelper.get(`/users/${userId}/followers`)
  },
  getUserFollowings(userId) {
    return apiHelper.get(`/users/${userId}/followings`)
  },

}
