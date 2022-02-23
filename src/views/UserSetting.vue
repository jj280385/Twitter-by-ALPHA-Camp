<template>
<<<<<<< HEAD
  <div class="setting-container">
    <Sidebar />
    <form class="setting-form" @submit.prevent.stop="handleSubmit">
      <div class="form-header">
        <span class="form-title">帳戶設定</span>
      </div>

      <div class="input-container">
        <label class="input-title"> 帳號 </label>
        <input
          v-model="accountName"
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
          type="passwordCheck"
          style="font-size: 25px"
        />
        <label class="error-text"> 密碼確認錯誤！ </label>
      </div>

      <button class="saveBtn"> 儲存 </button>
    </form>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  data() {
    return {
      accountName: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: ""
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        accountName: this.accountName,
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck
      });
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    }
  },
  components: {
    Sidebar,
  }
}
</script>

<style lang="scss" scoped>
.setting-container {
  display: flex;
  height: 100%;
}

.setting-form {
  border-left: 1px solid var(--border-color);
  width: 100%;
  position: relative;
}

.form-header {
  border-bottom: 1px solid var(--border-color);
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
}

.input-title {
  position: absolute;
  top: 35px;
  left: 26px;
  color: var(--input-label);
  font-family: "Noto Sans TC";
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
}

input {
  @include size(642px, 52px);
  @include margin(30px, 405px, 0, 16px);
  background-color: var(--input-background);
  border: none;
  border-bottom: 2px solid var(--input-border);
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
  color: var(--error-text);
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
  @include position(absolute, 515px, 0 ,0, 536px);
  background-color: var(--theme-color);
  border-radius: 50px;
  color: var(--button-text-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  &:hover {
    background-color: var(--hover-color);
  }
=======
  <div class="sidebar-container">
    <div class="sidebar-header">
      <img class="logo" src="../assets/image/logo.svg" />
    </div>
    <div class="sidebar-items">
      <div class="sidebar-item home">
        <img class="home-img" src="../assets/image/home.svg">
        <p class="item-link">
          <a href="/login">首頁</a>
        </p>
      </div>
      <div class="sidebar-item userInfo">
        <img class="userInfo-img" src="../assets/image/user-info.svg">
        <p class="item-link">
          <a href="/">個人資料</a>
        </p>
      </div>
      <div class="sidebar-item setting">
        <img class="setting-img" src="../assets/image/setting.svg">
        <p class="item-link">
          <a href="/setting">設定</a>
        </p>
      </div>
      <button class="twitter-btn" type="submit">推文</button>
    </div>
  </div>
</template>

<style lang="scss">
.sidebar-container{
  outline: 1px solid red;
  margin: 4px 40px 0 103px;
  width: 235px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
}

.sidebar-item {
  color: var(--theme-color);
  margin-bottom: 30px;
  display: flex;
}

.home-img {
  width: 20.25px;
  height: 22.2px;
}

.userInfo-img {
  width: 16.7px;
  height: 20.34px;
}

.setting {
  width: 20.75px;
  height: 20.75px;
}

.twitter-btn {
  width: 210px;
  height: 38px;
  background-color: var(--theme-color);
  border-radius: 100px;
  margin-top: 24px;
>>>>>>> 06c05f82417a9703f4757f30d927eeb21e326482
}

</style>