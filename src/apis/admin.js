import { apiHelper } from '../utils/helper.js'

export default {
  adminSignIn({ account, password }) {
    return apiHelper.post('/admin/signin', {
      account,
      password
    })
  },
  adminGetTweets() {
    return apiHelper.get('/admin/tweets')
  },
  adminDeleteTweet(id) {
    return apiHelper.delete(`/admin/tweets/${id}`)
  }

}