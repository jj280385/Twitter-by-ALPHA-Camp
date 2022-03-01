<template>
  <div class="setting-container">
    <Sidebar />
    <form class="setting-form" @submit.prevent="handleSubmit">
      <div class="form-header">
        <span class="form-title">帳戶設定</span>
      </div>

      <div class="input-container">
        <label class="input-title"> 帳號 </label>
        <input
          v-model="account"
          class="accountName"
          type="accountName"
          style="font-size: 25px"
        />
        <label class="error-text"> 帳號不存在！ </label>
      </div>

      <div class="input-container">
        <label class="input-title"> 名稱 </label>
        <input
          v-model="name"
          class="name"
          type="name"
          style="font-size: 25px"
        />
        <label class="error-text"> 名稱不存在！ </label>
      </div>

      <div class="input-container">
        <label class="input-title"> Email </label>
        <input
          v-model="email"
          class="email"
          type="email"
          style="font-size: 25px"
        />
        <label class="error-text"> Email不存在！ </label>
      </div>

      <div class="input-container">
        <label class="input-title"> 密碼 </label>
        <input
          v-model="password"
          class="password"
          type="password"
          style="font-size: 25px"
        />
        <label class="error-text"> 密碼不存在！ </label>
      </div>

      <div class="input-container">
        <label class="input-title"> 密碼確認 </label>
        <input
          v-model="passwordCheck"
          class="passwordCheck"
          type="password"
          style="font-size: 25px"
        />
        <label class="error-text"> 密碼確認錯誤！ </label>
      </div>

      <button class="saveBtn" :disabled="isProcessing">儲存</button>
    </form>
    <Toast />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Toast from '../components/Toast.vue'
import userAPI from '../apis/user'

export default {
  data() {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // 前端驗證
        if (!this.account) {
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '請填入想更改的帳號'
          })

          return
        }

        if (!this.name) {
          this.$bus.$emit('toast', { icon: 'error', title: '請填入名稱' })

          return
        } else if (this.name.length > 50) {
          this.$bus.$emit('toast', { icon: 'error', title: '字數超出上限！' })
        }

        if (!this.email) {
          this.$bus.$emit('toast', { icon: 'error', title: '請填入 Email' })

          return
        } else if (!/[^@\s]+@[^@\s]+\.[^@\s]+/.test(this.email)) {
          this.$bus.$emit('toast', { icon: 'error', title: 'Email 格式錯誤' })
          return
        }

        if (!this.password) {
          this.$bus.$emit('toast', { icon: 'error', title: '請填入密碼' })

          return
        } else if (this.password.length < 4) {
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '密碼至少要有四個字'
          })

          return
        }
        // 密碼確認欄位
        if (!this.passwordCheck) {
          this.$bus.$emit('toast', { icon: 'error', title: '請再次確認密碼' })

          return
        } else if (this.password !== this.passwordCheck) {
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '密碼與密碼確認輸入內容不同'
          })

          return
        }

        this.isProcessing = true

        const { data } = await userAPI.editAccount({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password
        })

        console.log(data)

        if (data.status === 'success') {
          this.$bus.$emit('toast', {
            icon: 'success',
            title: '資料修改成功'
          })

          this.isProcessing = false
        } else {
          throw new Error(data.message)
        }
      } catch (error) {
        this.isProcessing = false
        console.log(error)
        this.$bus.$emit({ title: `${error}` })
      }
    },
    async fetchAccount() {
      try {
        const { data } = await userAPI.getCurrent()

        if (data.status !== 'success') {
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '無法取得資料'
          })
        }

        const { account, name, email } = data.data
        this.account = account
        this.name = name
        this.email = email
      } catch (error) {
        console.log(error)
        this.$bus.$emit({ title: `${error}` })
      }
    }
  },
  created() {
    this.fetchAccount()
  },
  components: {
    Sidebar,
    Toast
  }
}
</script>

<style lang="scss" scoped>
.setting-container {
  display: flex;
  height: 100%;
}

.setting-form {
  border-left: 1px solid var(--theme-line);
  width: 100%;
  position: relative;
  margin-left: 40px;
}

.form-header {
  border-bottom: 1px solid var(--theme-line);
  backdrop-filter: blur(12px);
  position: relative;
  padding-left: 20px;
  width: 100%;
  height: 55px;
}

.form-title {
  font-size: 19px;
  font-weight: 700;
  line-height: 27.51px;
  color: var(--main-text);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.input-container {
  position: relative;
  width: 100%;

  // 顯示錯誤提示
  &.invalid {
    .error-text {
      visibility: visible;
    }
  }
}

.input-title {
  position: absolute;
  top: 35px;
  left: 26px;
  color: var(--info);
  font-family: 'Noto Sans TC';
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

input {
  @include size(642px, 52px);
  @include margin(30px, 405px, 0, 16px);
  background-color: var(--input-background);
  border: none;
  border-bottom: 2px solid var(--info);
  line-height: normal;
  text-align: center;
  // TODO:input的focus邊框沒有規定顏色，看要不要換其他顏色
  &:hover,
  &:focus {
    border-color: inherit;
    border: 1px solid var(--theme-color);
  }
}

// TODO:待串接後端驗證後，錯誤提示要改變input的border樣式
.error-text {
  visibility: hidden;
  color: var(--invalid);
  margin-top: 5px;
  position: absolute;
  left: 16px;
  top: 80px;
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

.saveBtn {
  @include size(116px, 46px);
  @include position(absolute, 515px, 0, 0, 536px);
  background-color: var(--theme-color);
  border-radius: 50px;
  color: var(--just-white);
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  &:hover {
    background-color: var(--hover-color);
  }
  &:active,
  &:focus {
    background-color: var(--focus-color);
  }
}
</style>
