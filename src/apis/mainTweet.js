import { apiHelper } from '../utils/helper.js'

export default {
  getTweets(id) {
    const searchParams = new URLSearchParams({id})
    return apiHelper.get(`./tweets?${searchParams.toString()}`)
  },
  getOtherPost(tweetId){
    return apiHelper.get(`/tweets/${tweetId}`)
  },
  getTweetReplies(tweetId){
    return apiHelper.get(`/tweets/${tweetId}/replies`)
  }
}