// 其他使用者Profile下方喜歡列表
<template>
  <div class="like-container">
    <!-- Profile頁面下方的喜歡的列表 -->
    <div class="like-list">
      <div class="like-item" v-for="like in likes" :key="like.id">
        <div class="user-avatar">
          <router-link to="/users/:id">
            <img class="avatar-img" />
          </router-link>
        </div>
        <div class="post-content">
          <router-link to="/users/:id">
            <div class="user-info">
              <div class="user-name">{{ like.tweet.User.name }}</div>
              <div class="user-accountName">@{{ like.tweet.User.account }}</div>
              <div class="post-time">‧{{ like.tweet.createdAt | fromNow }}</div>
            </div>
          </router-link>
          <span class="tweet-content">
            {{ like.tweet.description }}
          </span>
          <div class="icon-item">
            <button class="reply-btn">
              <router-link class="reply" to="/users/:id/like">
                <img class="reply-icon" src="../assets/image/reply-icon.svg" />
                <span class="replay-count">{{ like.tweet.likeCount }}</span>
              </router-link>
            </button>
            
          
            <button 
            class="like-btn"
            @click="isActive = !isActive"
            :class="{active:isActive}"
            >
            <router-link
              class="like"
              to="/profile/like"
            >
              <img class="like-icon" src="../assets/image/liked-icon.svg" v-if="isActive"/>
              <img class="like-icon" src="../assets/image/like-icon.svg" v-else />
              <span class="like-count" :class="{ active: isActive }">
                {{ like.tweet.replyCount }}</span>
            </router-link>
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

export default {
  mixins: [fromNowFilter],  
  data() {
    return {
      isActive: false,
      likes:[]
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchLikes(id);
    // console.log('id',id);
  },
    beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchLikes(id);
    next();
  },
  methods: {
    toggle() {
    if (!this.isActive) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  },
  async fetchLikes(id) {
      try {
        const { data } = await userAPI.getUserLikeList(id)
        // console.log('id',id);
        const likes = data;
        this.likes = likes
        // console.log('data',data)
      } catch (error) {
        console.log(error);
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
  @include size(100%, 144px);
  display: flex;
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
  @include size(510px, 144px);
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
  @include size(100%, 66px);
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
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

.like-btn, .like-count {
  &.active {
  color: var(--like-icon);
  }
}

</style>