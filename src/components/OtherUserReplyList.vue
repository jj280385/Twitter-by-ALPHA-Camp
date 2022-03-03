// 其他使用者Profile下方回覆列表
<template>
  <div class="reply-container">
    <!-- Profile頁面下方的回覆列表 -->
    <div v-if="noReply" class="noReply">
      <span> 目前沒有任何回覆 </span>
    </div>
    <div v-else class="reply-list">
      <div class="reply-item" v-for="reply in replies" :key="reply.id">
        <div class="user-avatar">
          <router-link :to="{path: `/users/${reply.UserId}`}">
            <img class="avatar-img" :src="reply.User.avatar"/>
          </router-link>
        </div>
        <div class="post-content">
          <router-link :to="{path: `/users/${reply.userId}`}">
            <div class="user-info">
              <div class="user-name">{{ reply.User.name }}</div>
              <div class="user-accountName">@{{ reply.User.account }}</div>
              <div class="post-time">‧{{ reply.createdAt | fromNow }}</div>
            </div>
          </router-link>
          <div class="reply">
            <span class="text">回覆</span>
            <router-link :to="{path: `/users/${reply.userId}`}" class="reply-to">@{{reply.Tweet.User.account}}</router-link>
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
import userAPI from "../apis/user"
import { fromNowFilter } from "../utils/mixins";

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      replies:[],
      noReply: true,
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
        const replies = data;
        this.replies = replies

        if (id === id) {
          this.noReply = false
        } else if(data.status === 'error'){
          this.noReply = true
        }
        console.log('data2',data);
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

.noReply {
  font-size: 18px;
  margin: 20px;
  color: var(--info);
}

.reply-list {
  position: relative;
  @include size(100%, 100%);
  display: flex;
  flex-direction: column;
}

.reply-item {
  @include size(100%, 100%);
  display: flex;
  align-items: flex-start;
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
  @include size(100%, 100%);
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  margin: 10px 0;
  word-break: break-all;
}
</style>