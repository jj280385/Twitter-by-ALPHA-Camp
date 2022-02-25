<template>
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

      <button class="saveBtn">儲存</button>
    </form>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

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
  },
  components: {
    Sidebar,
  },
};
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
  color: var(--info);
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