<template>
  <div class="following-container">
    <!-- title -->
    <div class="following-header">
      <button type="button" class="back-to">
        <router-link to="/profile">
          <img class="back-icon" src="../assets/image/back-icon.svg" />
        </router-link>
      </button>
      <div class="title">
        <router-link to="/profile" class="name">
          <span class="name">John Doe</span>
        </router-link>
        <p>25 推文</p>
      </div>
    </div>
    <!-- NavTabs 切換分頁 -->
    <div class="nav-tabs">
      <button
        class="nav-item"
        type="button"
      >
        <router-link 
        to="/profile/follower" 
        class="nav-link"
        > 跟隨者 </router-link>
      </button>

      <button
        class="nav-item"
        type="button"
        :class="{active: isActive}"
      >
        <router-link 
        to="/profile/following" 
        class="nav-link"
        :class="{active: isActive}"
        > 正在跟隨 </router-link>
      </button>
    </div>

    <!-- 追隨者列表 -->
    <div class="follower-list">
      <div class="list-item">
      <div class="user-info">
        <div class="user-avatar">
          <router-link to="/profile" class="avatar-img">
            <img class="avatar-img" />
          </router-link>
        </div>
        <div class="content">
          <router-link to="/profile">
            <div class="user-name">McDonald's</div>
            <div class="user-accountName">@McDonalds</div>
          </router-link>
          <span class="introduce">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </span>
        </div>
      </div>
      <div class="toggleBtn" v-if="isActive = isActive">
        <button 
        class="following-btn" 
        @click="toggle"
        :class="{active:isActive}"
        >正在追隨</button>
      </div>
      <div class="toggleBtn" v-else>
        <button 
        class="unfollowed-btn" 
        @click="toggle"
        :class="{active:isActive}"
        >追隨</button>
      </div>
      </div>

      <div class="list-item">
      <div class="user-info">
        <div class="user-avatar">
          <router-link to="/profile" class="avatar-img">
            <img class="avatar-img" />
          </router-link>
        </div>
        <div class="content">
          <router-link to="/profile">
            <div class="user-name">McDonald's</div>
            <div class="user-accountName">@McDonalds</div>
          </router-link>
          <span class="introduce">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </span>
        </div>
      </div>
      <div class="toggleBtn" v-if="isActive = isActive">
        <button 
        class="following-btn" 
        @click="toggle"
        :class="{active:isActive}"
        >正在追隨</button>
      </div>
      <div class="toggleBtn" v-else>
        <button 
        class="unfollowed-btn" 
        @click="toggle"
        :class="{active:isActive}"
        >追隨</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    toggle() {
    if (!this.isActive) {
      this.isActive = true;
    } else {
    this.isActive = false;
  }
},
  }
};
</script>

<style lang="scss" scoped>
.following-container {
  @include size(100%, 100%);
  border: 1px solid var(--theme-line);
}

.following-header {
  @include size(100%, 55px);
  display: flex;
  align-items: center;
}

.back-icon {
  @include size(14px, 17px);
  margin: 0 43px 0 15px;
}

.title {
  color: var(--main-text);
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
}

.nav-tabs {
  display: flex;
  border-bottom: 1px solid var(--theme-line);
}

.nav-item {
  @include size(130px, 54px);
  @include flex (row, center, center);
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  color: var(--info);
  &.active,
  &:focus {
    border-bottom: 2px solid var(--theme-color);
    color: var(--theme-color);
  }
  &:hover {
    border-bottom: 2px solid var(--hover-color);
    color: var(--hover-color);
  }
}

.name {
  color: var(--main-text);
  font-size: 19px;
  font-weight: 700;
  line-height: 27.51px;
}

p {
  color: var(--info);
  font-size: 13px;
  font-weight: 500;
  line-height: 18.82px;
}

.list-item {
  @include flex (row, normal, center);
  position: relative;
  padding: 10px 15px 10px 15px;
  border-bottom: 1px solid var(--theme-line);
  height: 104px;
}

.user-info {
  @include flex (row, normal, center);
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
}

.user-avatar {
  @include size(50px, 50px);
  margin-right: 10px;
}

.avatar-img {
  @include size(50px, 50px);
  background-color: var(--avatar-img-background);
  border-radius: 50%;
  &:hover {
    background-color: darkgray;
  }
}

.user-name {
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  color: var(--main-text);
  &:hover {
    text-decoration: underline;
  }
}

.user-accountName {
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  color: var(--info);
  margin-top: 3px;
  &:hover {
    text-decoration: underline;
  }
}

.introduce {
  @include size(510px, 44px);
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  color: var(--main-text);
  margin-right: 15px;
}

.following-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  @include size(90px, 25px);
  color: var(--just-white);
  background-color: var(--theme-color);
  border-radius: 100px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  &:hover {
    background-color: var(--hover-color);
  }
}

.unfollowed-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  @include size(60px, 25px);
  color: var(--theme-color);
  border: 1px solid var(--theme-color);
  border-radius: 100px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  &:hover {
    color: var(--just-white);
    background-color: var(--hover-color);
  }
}
</style>