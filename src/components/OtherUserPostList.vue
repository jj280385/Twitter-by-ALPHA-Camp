// 其他使用者的推文回覆主頁
<template>
  <div class="reply-container">
    <!-- title -->
    <div class="main-header">
      <button type="button" class="back-icon" @click="$router.go(-1)">
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
            fill="black"
          />
        </svg>
      </button>
      <span class="title">推文</span>
    </div>

    <!-- 回覆的推文 -->
    <div class="post">
      <div class="poster-info">

        <!-- 點擊照片會跳轉頁面到推文者的個人資料 -->
        <div class="poster-avatar">
          <router-link :to="{ path: `/users/${tweets.id}`}">
            <img class="avatar-img" :src="tweets.User.avatar"/>
          </router-link>
        </div>

        <!-- 點擊名稱和帳號會跳轉頁面到推文者的個人資料 -->
        <router-link :to="{ path: `/users/${tweets.id}`}">
          <div class="user-info">
            <div class="user-name">{{ tweets.User.name }}</div>
            <div class="user-accountName">@{{ tweets.User.account }}</div>
          </div>
        </router-link>
      </div>

      <div class="post-content">
        <span class="post-text"> {{ tweets.description }} </span>
      </div>
      <span class="post-time">{{ tweets.createdAt | fromNow }}</span>
      <div class="count">
        <span class="reply-count"
          ><p class="number">{{ tweets.replyCount }}</p>
          回覆</span>
        <span class="like-count">
          <p class="number">{{ tweets.likeCount }}</p>
          喜歡次數</span>
      </div>

      <div class="icon">
        <!-- TODO:回覆icon要綁回覆的modal -->
        <button class="reply-btn">
          <img class="reply-icon" src="../assets/image/reply-icon.svg" />
        </button>
        <!-- TODO:喜歡次數要能加減 -->
        <button
          class="like-btn"
          @click="isActive = !isActive"
          :class="{ active: isActive }"
        >
          <img
            class="like-icon"
            src="../assets/image/liked-icon.svg"
            v-if="isActive"
          />
          <img class="like-icon" src="../assets/image/like-icon.svg" v-else />
        </button>
      </div>
    </div>

    <!-- 下方回覆列表 -->
    <div v-if="noReply">
      <span class="noReply"> 目前沒有回覆 </span>
    </div>
    <div class="reply-list" 
    v-else
    v-for="reply in replies" 
    :key="reply.id">
      <div class="reply-item">
        <!-- 點擊照片會跳轉頁面到回覆者的個人資料 -->
        <div class="user-avatar">
          <router-link :to="{ path: `/users/${reply.id}`}">
            <img class="avatar-img" :src="reply.User.avatar"/>
          </router-link>
        </div>
        <div class="reply-content">
          <!-- 點擊名稱和帳號會跳轉頁面到回覆者的個人資料 -->
          <router-link :to="{ path: `/users/${reply.id}`}">
            <div class="replier-info">
              <div class="user-name">{{ reply.User.name }}</div>
              <div class="user-accountName">@{{ reply.User.account }}</div>
              <div class="reply-time">‧{{ reply.createdAt | fromNow }}</div>
            </div>
          </router-link>
          <div class="reply">
            <span class="text">回覆</span>
            <!-- 點擊@名稱會跳轉至推文者的個人資料頁面 -->
            <router-link 
            :to="{ path: `/users/${tweets.id}`}" 
            class="reply-to">
            @{{ tweets.User.name }}</router-link
            >
          </div>
          <span class="reply-text"> {{ reply.comment }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postAPI from "./../apis/mainTweet";
import { fromNowFilter } from "./../utils/mixins";

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      isActive: false,
      tweets: {
        id: 1,
        User:{},
        description:'',
        likeCount: 0,
        replyCount: 0,
        isLiked: false,
      },
      replies: [],
      noReply: false,
    };
  },
  created (){
    const id = this.$route.params;
    const tweetId = id.tweetId;
    this.fetchTweet(tweetId);
    this.fetchReplies(tweetId);
  },
  methods: {
    // 上方其他使用者推文
    async fetchTweet(tweetId) {
      try {
        const { data } = await postAPI.getOtherPost(tweetId);
        const tweets = data;
        this.tweets = tweets;
        // console.log('tweets',tweets);
      } catch (error) {
        console.log(error);
      }
    },

    // 下方推文回覆列表
    async fetchReplies(tweetId) { 
      try {
        const { data } = await postAPI.getTweetReplies(tweetId);
        // console.log('tweetid',tweetId);
        // console.log('路由變化') 
        const replies = data;
        this.replies = replies;
        // console.log("data", data);
        if (data.status=== 'error') {
          this.noReply=true
        }
      } catch (error) {
        console.log("error");
      }
    },
  },
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

button {
  &:hover {
    svg > path {
      fill: var(--hover-color);
    }
  }
  &:focus {
    svg > path {
      fill: var(--focus-color);
    }
  }
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

  height: 100%;

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
  display: flex;
  align-content: center;
  align-items: center;
  height: 61px;
  padding-top: 18px;
}

.reply-icon,
.like-icon {
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
}

.reply-time {
  font-size: 15px;
  font-weight: 500;
  color: var(--info);
}

.noReply {
  font-size: 25px;
  margin-left: 10px;
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