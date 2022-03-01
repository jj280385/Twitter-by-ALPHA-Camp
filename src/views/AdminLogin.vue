<template>
  <div class="container">
    <form class="admin-container" @submit.prevent.stop="handleSubmit">
      <img class="logo" src="../assets/image/logo.svg" />

      <span class="page-title"> 後台登入 </span>

      <div class="input-container">
        <label class="input-title"> 帳號 </label>
        <input
          v-model="account"
          class="account"
          type="account"
          style="font-size: 25px"
        />
        <label class="error-text"> 帳號不存在！ </label>
      </div>

      <div class="input-container">
        <label class="input-title"> 密碼 </label>
        <input
          v-model="password"
          class="password"
          type="password"
          style="font-size: 25px"
        />
        <label class="error-text"> 密碼錯誤！ </label>
      </div>

      <button class="adminLogin-btn" type="submit">登入</button>

      <div class="adminLogin-link">
        <p><router-link to="/login">前台登入</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
import adminAPI from '../apis/admin'
import Toast from '../components/Toast.vue'

export default {
  components: {
    Toast
  },
  data() {
    return {
      account: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account) {
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '請輸入帳號'
          })
          return
        }

        if (!this.password) {
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '請輸入密碼'
          })
          return
        }

        this.isProcessing = true

        const { data } = await adminAPI.adminSignIn({
          account: this.account,
          password: this.password
        })
        console.log(data);
        if (data.status !== 'success') {
          this.$bus.$emit('toast', { icon: 'error', title: `${data.message}` })
          throw new Error(data.message)
        }

        // 將 token 存放在 localStorage
        localStorage.setItem('token', data.data.token)
        // 用commit改寫 vuex store state
        this.$store.commit('setCurrentUser', data.data.user)

           // 發送成功訊息
        this.$bus.$emit('toast', {
          icon: 'success',
          title: '登入成功'
        })
        this.$router.push({name: 'admin-main'})
      } catch (error) {
        this.$bus.$emit('toast', { icon: 'error', title: `${error}` })
        this.isProcessing = false
        console.log(error)
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.container {
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.admin-container {
  position: relative;
  width: 540px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.logo {
  width: 50px;
  height: 50px;
}

.page-title {
  margin: 20px 0 40px 0;
  font-family: "Noto Sans TC";
  font-size: 23px;
  font-weight: 700;
  line-height: 33.3px;
}

.input-container {
  position: relative;
  margin-bottom: 32px;
  width: 100%;
}

.input-title {
  position: absolute;
  top: 5px;
  left: 10px;
  color: var(--info);
  font-family: "Noto Sans TC";
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

input {
  width: 100%;
  height: 52px;
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
  color: var( --invalid);
  margin-top: 5px;
  position: absolute;
  left: 0;
  top: 50px;
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

.adminLogin-btn {
  background-color: var(--theme-color);
  width: 100%;
  height: 46px;
  border-radius: 50px;
  color: var(--just-white);
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  //TODO:看看邊框顏色還要不要更換，若時間充裕再來優化點擊按鈕後的動畫
  &:hover {
    background-color: var(--hover-color);
  }
  &:active,
  &:focus {
    background-color: var(--focus-color);
  }
}

.adminLogin-link {
  position: absolute;
  right: 0;
  top: 387px;
  height: 26px;
  width: 72px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  color: var(--router-link);
}

p {
  text-decoration: underline;
  font-family: "Noto Sans TC";
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  &:hover {
    color: var(--hover-color);
  }
  &:focus,
  &:active {
    color: var(--focus-color);
  }
}
</style>

