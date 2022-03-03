import { apiHelper } from '../utils/helper.js'

export default {
  addFollow(id) {
    return apiHelper.post('/followships', { id })
  },

  deleteFollow(userId) {
    return apiHelper.delete(`/followships/${userId}`)
  }
}
