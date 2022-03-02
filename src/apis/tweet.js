import { apiHelper } from '../utils/helper.js'

export default {
  submitTweet({ description }) {
  return  apiHelper.post('/tweets', { description })
  }
}
