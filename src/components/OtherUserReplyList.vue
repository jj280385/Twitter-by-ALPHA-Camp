// 其他使用者Profile下方回覆列表
<template>
  <div class="reply-container">
    <!-- Profile頁面下方的回覆列表 -->
    <div class="reply-list">
      <div class="reply-item" v-for="reply in replies" :key="reply.id">
        <div class="user-avatar">
          <router-link to="/users/:id">
            <img class="avatar-img" />
          </router-link>
        </div>
        <div class="post-content">
          <router-link to="//users/:id">
            <div class="user-info">
              <div class="user-name">{{ reply.User.name }}</div>
              <div class="user-accountName">@{{ reply.account }}</div>
              <div class="post-time">‧{{ reply.createdAt | fromNow }}</div>
            </div>
          </router-link>
          <div class="reply">
            <span class="text">回覆</span>
            <router-link to="/users/:id" class="reply-to">@Daniel</router-link>
          </div>
          <span class="tweet-content">
            {{ reply.comment }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/user"
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      replies:[]
    }
  },
  created() {
    const { id } = this.$route.params;
    this.fetchTweets(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchTweets(id);
    next();
  },
  methods: {
    async fetchTweets(id) {
      try {
        const { data } = await userAPI.getUserReplyList(id)
        // console.log('id',id);
        const replies = data;
        this.replies = replies
        console.log('data',data)
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

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