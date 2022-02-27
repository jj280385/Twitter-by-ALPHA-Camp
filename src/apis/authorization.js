import { apiHelper } from '../utils/helper.js'

export default {
  // 註冊 API
  signUp({ account, name, email, password }) {
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
    })
  },
}
