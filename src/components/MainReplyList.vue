<template>
  <div class="reply-container">
    <!-- title -->
    <div class="main-header">
      <button type="button" class="back-to">
        <img class="back-icon" src="../assets/image/back-icon.svg" />
      </button>
      <span class="title">推文</span>
    </div>
    <!-- 回覆的推文 -->
    <div class="post">
      <div class="poster-info">
        <div class="poster-avatar">
          <router-link to="/profile">
            <img class="avatar-img" />
          </router-link>
        </div>
        <router-link to="/profile">
          <div class="user-info">
            <div class="user-name">Apple</div>
            <div class="user-accountName">@apple</div>
          </div>
        </router-link>
      </div>
      <div class="post-content">
        <span class="post-text">
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </span>
      </div>
      <span class="post-time">上午 10:05・2020年6月10日</span>
      <div class="count">
        <span class="reply-count"
          ><p class="number">34</p>
          回覆</span
        >
        <span class="like-count"
          ><p class="number">808</p>
          喜歡次數</span
        >
      </div>
      <div class="icon">
        <button class="reply-btn">
          <router-link class="reply" to="/main/reply">
            <img class="reply-icon" src="../assets/image/reply-icon.svg" />
          </router-link>
        </button>

        <button
          class="like-btn"
          @click="isActive = !isActive"
          :class="{ active: isActive }"
        >
          <router-link class="like" to="/main/reply">
            <img
              class="like-icon"
              src="../assets/image/liked-icon.svg"
              v-if="isActive"
            />
            <img class="like-icon" src="../assets/image/like-icon.svg" v-else />
          </router-link>
        </button>
      </div>
    </div>
    <!-- 下方回覆列表 -->
    <div class="reply-list">
      <div class="reply-item">
        <div class="user-avatar">
          <router-link to="/profile">
            <img class="avatar-img" src="../assets/image/mary-jane.svg" />
          </router-link>
        </div>
        <div class="reply-content">
          <router-link to="/profile">
            <div class="replier-info">
              <div class="user-name">Mary Jane</div>
              <div class="user-accountName">@mjjane</div>
              <div class="reply-time">‧3小時</div>
            </div>
          </router-link>
          <div class="reply">
            <span class="text">回覆</span>
            <router-link to="/" class="reply-to">@Daniel</router-link>
          </div>
          <span class="reply-text"> Great~ </span>
        </div>
      </div>

      <div class="reply-item">
        <div class="user-avatar">
          <router-link to="/profile">
            <img class="avatar-img" src="../assets/image/mary-jane.svg" />
          </router-link>
        </div>
        <div class="reply-content">
          <router-link to="/profile">
            <div class="replier-info">
              <div class="user-name">Mary Jane</div>
              <div class="user-accountName">@mjjane</div>
              <div class="reply-time">‧3小時</div>
            </div>
          </router-link>
          <div class="reply">
            <span class="text">回覆</span>
            <router-link to="/" class="reply-to">@Daniel</router-link>
          </div>
          <span class="reply-text"> Great~ </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
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
.reply-container {
  width: 100%;
  height: 100%;
  border: 1px solid var(--theme-line);
}

.main-header {
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--theme-line);
}

.back-icon {
  height: 17px;
  width: 14px;
  margin-left: 15px;
  margin-right: 44px;
}

.title {
  color: var(--main-text);
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
}

.poster-info {
  display: flex;
}

.post-content {
  height: 136px;
  width: 510px;
  margin-top: 18px;
  margin-bottom: 15px;
}

.post-text {
  color: var(--main-text);
  font-size: 23px;
  font-weight: 500;
  line-height: 34px;
}

.user-name {
  color: var(--main-text);
  margin-right: 5px;
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  &:hover {
    text-decoration: underline;
  }
}

.post {
  height: 399px;
  // width: 570px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid var(--theme-line);
}

.poster-avatar {
  @include size(50px, 50px);
  margin-right: 10px;
}

.post-time {
  font-size: 15px;
  font-weight: 500;
  line-height: 21.72px;
  color: var(--info);
  margin-bottom: 15px;
}

.count {
  padding: 20px 0;
  height: 68px;
  border-top: 1px solid var(--theme-line);
  border-bottom: 1px solid var(--theme-line);
  display: flex;
  color: var(--info);
}

.reply-count,
.like-count {
  font-size: 19px;
  font-weight: 500;
  line-height: 27.51px;
  display: flex;
  margin-right: 20px;
}

.number {
  color: var(--main-text);
  font-weight: 700;
  margin-right: 5px;
}

.icon {
  height: 61px;
  margin: 18px 0 13px 0;
}

.reply-icon, .like-icon {
  width: 30px;
  height: 30px;
}

.reply-icon {
  margin-right: 155px;
}

// 下方回覆列表
.reply-list {
  position: relative;
  @include size(100%, 100%);
  display: flex;
  flex-direction: column;
}

.reply-item {
  @include size(100%, 105px);
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  border-bottom: 1px solid var(--theme-line);
  padding: 15px;
}

.user-avatar {
  @include size(50px, 50px);
  margin-right: 10px;
  margin-left: 15px;
  margin-bottom: 37px;
}

.avatar-img {
  background-color: var(--avatar-img-background);
  border-radius: 50%;
  &:hover {
    background-color: darkgray;
  }
}

.reply-content {
  width: 510px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
}

.reply-text {
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
}

.reply-to {
  color: var(--theme-color);
  &:hover {
    text-decoration: underline;
  }
}

.replier-info {
  display: flex;
  align-items: center;
  // margin-bottom: 5px;
}

.reply-time {
  font-size: 15px;
  font-weight: 500;
  color: var(--info);
}
// 個人資料共用樣式
.user-accountName {
  color: var(--info);
  font-size: 15px;
  font-weight: 500;
  line-height: 21.72px;
  &:hover {
    text-decoration: underline;
  }
}

.post-time {
  color: var(--info);
  font-size: 15px;
  font-weight: 500;
  &:hover {
    text-decoration: none;
  }
}

.text {
  color: var(--info);
  margin-right: 5px;
}
</style>