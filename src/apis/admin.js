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
  adminDeleteTweet(tweetId) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  }

}