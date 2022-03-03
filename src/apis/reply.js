import { apiHelper } from '../utils/helper.js'

export default {
  subMitReply({ tweetId, comment }) {
    return apiHelper.post(`tweets/${tweetId}/replies`, {comment})
  }
}
