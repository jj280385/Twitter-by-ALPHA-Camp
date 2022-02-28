<template>
  <div class="container">
    <form class="regist-container" @submit.prevent.stop="handleSubmit">
      <img class="logo" src="../assets/image/logo.svg" />

      <span class="page-title"> 建立你的帳號 </span>

      <div class="input-container">
        <label class="input-title"> 帳號 </label>
        <input
          v-model="accountName"
          class="accountName"
          type="accountName"
          style="font-size: 25px"
        />
        <label class="error-text"> 帳號已重複註冊！ </label>
      </div>

      <div class="input-container">
        <label class="input-title"> 名稱 </label>
        <input
          v-model="name"
          class="name"
          type="name"
          style="font-size: 25px"
        />
        <label class="error-text"> 名稱已重複註冊！ </label>
      </div>

      <div class="input-container">
        <label class="input-title"> Email </label>
        <input
          v-model="email"
          class="email"
          type="email"
          style="font-size: 25px"
        />
        <label class="error-text"> Email 已重複註冊！ </label>
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

      <div class="input-container">
        <label class="input-title"> 密碼確認 </label>
        <input
          v-model="passwordCheck"
          class="passwordCheck"
          type="passwordCheck"
          style="font-size: 25px"
        />
        <label class="error-text"> 密碼確認錯誤！ </label>
      </div>

      <button class="regist-btn" type="submit">註冊</button>

      <div class="cancel-link">
        <p><router-link to="/login"> 取消 </router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import Toast from '../components/Toast.vue'
import authorizationAPI from '../apis/authorization'

>>>>>>> 9e6dffce1a4b8c2a61282e7475539e86c66624f7
export default {
  data() {
    return {
      accountName: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        accountName: this.accountName,
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      });

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
<<<<<<< HEAD
  },
};
=======
    passwordLength() {
      if (this.password && this.password.length < 4) {
        this.$bus.$emit('toast', { icon: 'error', title: '密碼至少要有四個字' })

        this.passwordHint = true
      } else {
        this.passwordHint = false
      }
    },
    checkPassword() {
      if (
        this.password &&
        this.passwordCheck &&
        this.password !== this.passwordCheck
      ) {
        this.checkHint = true
      } else {
        this.checkHint = false
      }
    },

    async handleSubmit() {
      try {
        // 前端驗證
        if (!this.account) {
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '請填入想註冊的帳號'
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
        }
        if (!this.password) {
          this.$bus.$emit('toast', { icon: 'error', title: '請填入請填入密碼' })

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
            title: '密碼與密碼確認輸入不同'
          })

          return
        }

        this.isProcessing = true

        // 發送API
        const { data } = await authorizationAPI.signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password
        })

        if (data.status === 'error') {
          this.$bus.$emit('toast', {
            icon: 'error',
            title: `${data.message}`
          })
          throw new Error(data.message)
        }
        // 發送成功訊息
        this.$bus.$emit('toast', {
          icon: 'success',
          title: '註冊成功'
        })
        // 轉址
        this.$router.push({ name: 'user-login' })
        this.isProcessing = false

      } catch (error) {
        this.isProcessing = false
        console.log(error)
        this.$bus.$emit({ title: `${error}` })
      }
    }
  }
}
>>>>>>> 9e6dffce1a4b8c2a61282e7475539e86c66624f7
</script>

<style lang="scss" scoped>
.container {
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.regist-container {
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
  color: var(--main-text);
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

.regist-btn {
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

.cancel-link {
  position: relative;
  top: 20px;
}

p {
  text-decoration: underline;
  font-family: "Noto Sans TC";
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  color: var(--router-link);
  &:hover {
    color: var(--hover-color);
  }
  &:focus,
  &:active {
    color: var(--focus-color);
  }
}
</style>

