<template>
  <div class="sidebar-container">
    <div class="sidebar-header">
      <img class="sidebar-logo" src="../assets/image/logo.svg" />
    </div>
    <div class="sidebar-items">
      <!-- TODO:item中的icon和item-name的變色功能v-fi /v-else尚未設定 -->
      <button class="sidebar-item home" type="submit" @click="toggleIcon">
        <router-link to="/setting">
          <img
            v-if="isActive"
            class="item-icon"
            src="../assets/image/home.svg"
          />
          <img v-else class="item-icon" src="../assets/image/home-active.svg" />
          <div class="item-name" :class="{ active: !isActive }">首頁</div>
        </router-link>
      </button>

      <button class="sidebar-item userInfo" type="submit" @click="toggleIcon">
        <router-link to="/setting">
          <img
            v-if="isActive"
            class="item-icon"
            src="../assets/image/user-info.svg"
          />
          <img
            v-else
            class="item-icon"
            src="../assets/image/user-info-active.svg"
          />
          <div class="item-name" :class="{ active: !isActive }">個人資料</div>
        </router-link>
      </button>

      <button class="sidebar-item setting" type="submit" @click="toggleIcon">
        <router-link to="/setting">
          <img
            v-if="isActive"
            class="item-icon"
            src="../assets/image/setting.svg"
          />
          <img
            v-else
            class="item-icon"
            src="../assets/image/setting-active.svg"
          />
          <div class="item-name" :class="{ active: !isActive }">設定</div>
        </router-link>
      </button>

      <button 
      class="twitter-btn" 
      type="submit" 
      >推文</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      modal: null,
    };
  },
  methods: {
    toggleIcon() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 235px;
  height: 100%;
  @include flex(column, flex-start, flex-start);
  @include margin(4px, 0, 0, 103px);
}

.sidebar-header {
  @include size(50px, 50px);
  margin-bottom: 35px;
  position: relative;
}

.sidebar-logo {
  @include size(40px, 40px);
  @include position(absolute, 50%, 0, 0, 50%);
  transform: translate(-50%, -50%);
}

.sidebar-item {
  color: var(--main-text);
  @include flex(row, flex-start, center);
  align-content: center;
  margin-left: 10px;
}

.item-name {
  color: var(--main-text);
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
}

.item-icon {
  margin-right: 20.9px;
  @include size(24px, 24px);
}

.home {
  margin-bottom: 30px;
}

.userInfo {
  margin-bottom: 31px;
}

a {
  @include flex(row, flex-start, center);
}

.twitter-btn {
  @include size(210px, 38px);
  background-color: var(--theme-color);
  color: var(--just-white);
  border-radius: 100px;
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  &:hover {
    background-color: var(--hover-color);
  }
  &:active,
  &:focus {
    background-color: var(--focus-color);
  }
}

.newClass {
  box-shadow: 0px 0px 5px #000;
  background-color: green;
  color: #fff;
  padding: 3px 5px;
}

.test-btn {
  margin-top: 40px;
  width: 100px;
  height: 50px;
  // background-color: green;
  &:active,
  &:focus {
    // background-color: gray;
    color: blue;
  }
}

.active {
  color: var(--theme-color);
}
</style>