<template>
  <div class="like-container">
    <!-- Profile頁面下方的喜歡的列表 -->
    <div class="like-list">
      <div class="like-item" v-for="tweet in tweets" :key="tweet.id">
        <div class="user-avatar">
          <router-link to="/users/:id">
            <img class="avatar-img" :src="tweet.User.avatar"/>
          </router-link>
        </div>
        <div class="post-content">
          <router-link to="/profile">
            <div class="user-info">
              <div class="user-name">{{ tweet.User.name }}</div>
              <div class="user-accountName">@{{ tweet.User.account }}</div>
              <div class="post-time">‧{{ tweet.createdAt | fromNow }}</div>
            </div>
          </router-link>
          <span class="tweet-content">
            {{ tweet.description }}
          </span>
          <div class="icon-item">
            <button class="reply">
                <img class="reply-icon" src="../assets/image/reply-icon.svg" />
                <span class="replay-count">{{ tweet.likeCount }}</span>
            </button>
            
            <button 
            class="like"
            @click="isActive = !isActive"
            :class="{active:isActive}"
            >
              <img class="like-icon" src="../assets/image/liked-icon.svg" v-if="isActive"/>
              <img class="like-icon" src="../assets/image/like-icon.svg" v-else />
              <span class="like-count" :class="{ active: isActive }">{{ tweet.replyCount }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from './../apis/user'
import { fromNowFilter } from "./../utils/mixins";
import { mapState } from 'vuex'

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      tweets:[],
      noReply: true,
      isActive: true,
    };
  },
  created() {
    const id = this.currentUser.id;
    this.fetchTweets(id);
  },
  computed: {
    ...mapState(['currentUser'])
  },
  beforeRouteUpdate(to, from, next) {
    const id = this.currentUser.id;
    this.fetchTweets(id);
    next();
  },
  methods: {
    async fetchTweets(id) {
      try {
        const { data } = await userAPI.getUserTweetList(id)
        const tweets = data;
        this.tweets = tweets
        // console.log('data',tweets)
      } catch (error) {
        console.log('error');
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.like-container {
  @include size(100%, 100%);
  margin-top: 10px;
}

.like-list {
  position: relative;
  @include size(100%, 100%);
  display: flex;
  flex-direction: column;
}

.like-item {
  padding-top: 10px;
  @include size(100%, 100%);
  display: flex;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  border-bottom: 1px solid var(--theme-line);
  padding: 10px;
}

.user-avatar {
  @include size(50px, 50px);
  margin: 0 10px auto 15px;
}

.avatar-img {
  background-color: var(--avatar-img-background);
  border-radius: 50%;
  &:hover {
    background-color: darkgray;
  }
}

.post-content {
  @include size(510px, 100%);
  display: flex;
  flex-wrap: wrap;
  margin-right: 15px;
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
  @include size(100%, 100%);
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  margin: 10px 0;
  word-break: break-all;
}

.icon-item {
  @include size(130px, 21px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reply,
.like {
  display: flex;
  align-items: center;
  &.active {
  color: var(--like-icon);
  }
}

.reply-icon {
  @include size(15px, 15px);
  margin-right: 10px;
}

.like-icon {
  @include size(20.1px, 18.91px);
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