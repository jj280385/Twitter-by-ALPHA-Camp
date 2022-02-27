<template>
  <div class="reply-container">
    <!-- Profile頁面下方的回覆列表 -->
    <div class="reply-list">
      <div class="reply-item">
        <div class="user-avatar">
          <router-link to="/profile">
            <img class="avatar-img" />
          </router-link>
        </div>
        <div class="post-content">
          <router-link to="/profile">
            <div class="user-info">
              <div class="user-name">Jhon Deo</div>
              <div class="user-accountName">@hryjohn</div>
              <div class="post-time">‧3小時</div>
            </div>
          </router-link>
          <div class="reply">
            <span class="text">回覆</span>
            <router-link to="/" class="reply-to">@Daniel</router-link>
          </div>
          <span class="tweet-content">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
        </div>
      </div>

      <div class="reply-item">
        <div class="user-avatar">
          <router-link to="/profile">
            <img class="avatar-img" />
          </router-link>
        </div>
        <div class="post-content">
          <router-link to="/profile">
            <div class="user-info">
              <div class="user-name">Jhon Deo</div>
              <div class="user-accountName">@hryjohn</div>
              <div class="post-time">‧3小時</div>
            </div>
          </router-link>
          <div class="reply">
            <span class="text">回覆</span>
            <router-link to="/" class="reply-to">@Daniel</router-link>
          </div>
          <span class="tweet-content">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reply-container {
  @include size(100%, 100%);
  margin-top: 10px;
}

.reply-list {
  position: relative;
  @include size(100%, 100%);
  display: flex;
  flex-direction: column;
}

.reply-item {
  @include size(100%, 130px);
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  border-bottom: 1px solid var(--theme-line);
}

.user-avatar {
  @include size(50px, 50px);
  margin: 0 10px 67px 15px;
}

.avatar-img {
  background-color: var(--avatar-img-background);
  border-radius: 50%;
  &:hover {
    background-color: darkgray;
  }
}

.post-content {
  width: 510px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-right: 15px;
}

.user-info {
  display: flex;
  margin-bottom: 5px;
}

.user-name {
  color: var(--main-text);
  margin-right: 5px;
  &:hover {
    text-decoration: underline;
  }
}

.user-accountName {
  color: var(--info);
  font-size: 15px;
  font-weight: 500;
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

.reply {
  @include size(94px, 22px);
  font-size: 15px;
  font-weight: 500;
  line-height: 21.72px;
}

.text {
  color: var(--info);
  margin-right: 5px;
}

.reply-to {
  color: var(--theme-color);
}

.tweet-content {
  @include size(100%, 66px);
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
}
</style>