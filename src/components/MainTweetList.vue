<template>
  <div class="main-container">
    <!-- title -->
    <div class="main-header">
      <span class="title">首頁</span>
    </div>
    <!-- 推文區域 -->
    <div class="tweet-area">
      <div class="avatar">
        <router-link to="/">
          <img src="../assets/image/john-doe-50.svg" alt="預設的頭像" />
        </router-link>
      </div>

      <!-- 推文輸入框 -->
      <input type="text" class="text-area" placeholder="有什麼新鮮事？" />
      <button class="tweet-btn" type="submit">推文</button>
    </div>

    <!-- 下方推文列表 -->
    <div class="tweet-list" v-for="tweet in tweets" :key="tweet.id">
      <div class="tweet-item">
        <div class="user-avatar">
          <router-link to="/user/:id">
            <img class="avatar-img" :src="tweet.User.avatar" alt="/" />
          </router-link>
        </div>
        <div class="post-content">
          <router-link to="/user/:id">
            <div class="user-info">
              <div class="user-name">{{ tweet.User.name }}</div>
              <div class="user-accountName">{{ tweet.User.account }}</div>
              <div class="post-time">‧{{ tweet.createdAt | fromNow }}</div>
            </div>
          </router-link>
          <router-link 
          :to="{
              path: `/tweets/${tweet.id}`,
              params: { id: tweet.id}
            }">
          class="tweet-content">
            <span class="tweet-content">
              {{ tweet.description }}
            </span>
          </router-link>
          <div class="icon-item">
            <router-link class="reply" 
            :to="{
              path: 'post',
              name: 'user-post',
              params: { id: tweet.id}
            }">
              <img class="reply-icon" src="../assets/image/reply-icon.svg" />
              <span class="replay-count">{{ tweet.replyCount }}</span>
            </router-link>

            <router-link class="like" to="/main">
              <img class="like-icon" src="../assets/image/like-icon.svg" />
              <span class="like-count">{{ tweet.likeCount }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tweetAPI from "./../apis/mainTweet";

import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  data (){
    return {
      tweets: []
    }
  },
  created() {
    const { queryId } = this.$route.params
    this.fetchTweets(
      {queryId}
    )
  },
  methods: {
    async fetchTweets (queryId){
      try {
        const response = await tweetAPI.getTweets({
          id: queryId
        })
        
        const tweets = response.data
        this.tweets = tweets

        // console.log('response',response.data)
        // console.log('id',tweets[0].id)

      } catch (e) {
        console.log('error')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  @include size(100%, 100%);
  border: 1px solid var(--theme-line);
}

.main-header {
  @include size(100%, 55px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--theme-line);
}

.title {
  margin-left: 15px;
  color: var(--main-text);
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
}

.tweet-area {
  display: flex;
  height: 120px;
  border-bottom: 10px solid var(--theme-line);
  padding: 10px 15px 10px 15px;
}

.avatar {
  @include size(50px, 50px);
}

.text-area {
  border: none;
  height: 100%;
  width: 80%;
  padding: 21px 0 73px 10px;
}

input[type="text"] {
  font-size: 18px;
}

.tweet-btn {
  @include size(66px, 38px);
  background-color: var(--theme-color);
  color: var(--just-white);
  border-radius: 100px;
  margin-top: 51px;
  &:hover {
    background-color: var(--hover-color);
  }
}

.tweet-list {
  position: relative;
  @include size(100%, 100%);
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.tweet-item {
  @include size(100%, 145px);
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  border-bottom: 1px solid var(--theme-line);
}

.user-avatar {
  @include size(50px, 50px);
  margin: 0 10px 82px 15px;
}

.avatar-img {
  background-color: var(--avatar-img-background);
  border-radius: 50%;
  &:hover {
    background-color: darkgray;
  }
}

.post-content {
  @include size(510px, 145px);
  display: flex;
  flex-flow: row wrap;
  margin-right: 15px;
  padding-top: 10px;
}

.user-info {
  display: flex;
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

.tweet-content {
  @include size(100%, 66px);
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
}

.icon-item {
  @include size(130px, 21px);
  display: flex;
  justify-content: space-between;
}

.reply,
.like {
  display: flex;
}
.reply-icon,
.like-icon {
  @include size(15px, 15px);
  margin-right: 10px;
}

.replay-count,
.like-count {
  color: var(--info);
  font-size: 13px;
  font-weight: 500;
  line-height: 13px;
}
</style>