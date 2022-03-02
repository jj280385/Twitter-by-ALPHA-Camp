import { apiHelper } from '../utils/helper.js'

export default {
  getTweets(id) {
    const searchParams = new URLSearchParams({id})
    return apiHelper.get(`./tweets?${searchParams.toString()}`)
  },
  
  getOtherPost(id){
    // console.log('id',id)
    return apiHelper.get(`/tweets/${id}`)
  },
  getTweetReplies(id){
    return apiHelper.get(`/tweets/${id}/replies`)
  }
}