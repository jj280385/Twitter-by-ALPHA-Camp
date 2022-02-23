<template>
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
}

</style>