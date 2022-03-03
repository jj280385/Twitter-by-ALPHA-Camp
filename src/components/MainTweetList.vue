<template>
  <div class="main-container">
    <!-- title -->


    <!-- 下方推文列表 -->
    <div class="tweet-list" v-for="tweet in tweets" :key="tweet.id">
      <div class="tweet-item">
        <!-- 點擊照片會跳轉頁面到其他使用者個人資料 -->
        <div class="user-avatar">
          <router-link :to="{path: `/users/${tweet.id}`}">
            <img class="avatar-img" :src="tweet.User.avatar" alt="/" />
          </router-link>
        </div>

        <!-- 點擊名稱和帳號會跳轉頁面到其他使用者個人資料 -->
        <div class="post-content">
          <router-link :to="{path: `/users/${tweet.id}`}">
            <div class="user-info">
              <div class="user-name">{{ tweet.User.name }}</div>
              <div class="user-accountName">{{ tweet.User.account }}</div>
              <div class="post-time">‧{{ tweet.createdAt | fromNow }}</div>
            </div>
          </router-link>
          <!-- 點擊貼文內容會跳轉頁面到推文頁面 -->
          <router-link :to="{path: `/tweets/${tweet.id}`}"
          class="tweet-content">
            <span class="tweet-content">
              {{ tweet.description }}
            </span>
          </router-link>

          <div class="icon-item">

            <button
              @click="$bus.$emit('replyModal',tweet)"
              class="reply d-flex"
            >
              <!-- SVG -->
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.77881 1.40127L6.18631 1.39502H6.18506C3.45131 1.39502 1.31006 3.53689 1.31006 6.27127C1.31006 8.83252 3.30131 10.775 5.97568 10.8775V13.27C5.97568 13.3375 6.00318 13.4488 6.05068 13.5219C6.13943 13.6625 6.29068 13.7388 6.44568 13.7388C6.53193 13.7388 6.61881 13.715 6.69693 13.665C6.86193 13.56 10.7426 11.0775 11.7519 10.2238C12.9407 9.21752 13.6519 7.74252 13.6538 6.27877V6.26814C13.6501 3.53877 11.5101 1.40127 8.77881 1.40064V1.40127ZM11.1457 9.50877C10.4369 10.1088 8.10693 11.6369 6.91318 12.4106V10.4188C6.91318 10.16 6.70381 9.95002 6.44443 9.95002H6.19693C3.90943 9.95002 2.24818 8.40252 2.24818 6.27127C2.24818 4.06252 3.97818 2.33252 6.18568 2.33252L8.77756 2.33877H8.77881C10.9863 2.33877 12.7163 4.06752 12.7176 6.27377C12.7157 7.46752 12.1288 8.67627 11.1463 9.50877H11.1457Z"
                  fill="#657786"
                />
              </svg>
              <!-- SVG -->
              <span class="replay-count">{{ tweet.replyCount }}</span>
            </button>

            <!-- 點擊喜歡icon不會跳轉頁面 -->
            <div class="like-item">
              <button
                class="like"
                v-if="!tweet.isLiked"
                @click.stop.prevent="addLikes(tweet)"
              >
                <img class="like-icon" src="../assets/image/like-icon.svg" alt="/">
                <span>{{ tweet.likeCount }}</span>
              </button>
              <button
                v-else
                class="like" 
                type="button" 
                @click.stop.prevent="deleteLikes(tweet)"
              >
                <img class="like-icon" src="../assets/image/liked-icon.svg" alt="">
                <span>{{ tweet.likeCount }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ReplyModal />
  </div>
</template>

<script>
import tweetAPI from './../apis/mainTweet'
import { fromNowFilter } from './../utils/mixins'
import ReplyModal from '../components/ReplyModal.vue'

export default {
  components: { ReplyModal },
  mixins: [fromNowFilter],
  data() {
    return {
      tweets: []
    }
  },

  created() {
    const { queryId } = this.$route.params
    this.fetchTweets({ queryId })
  },
  methods: {
    async fetchTweets(queryId) {
      try {
        const response = await tweetAPI.getTweets({
          id: queryId
        })

        const tweets = response.data
        this.tweets = tweets

        // console.log(tweets)
        // console.log('response',response.data)
        // console.log('id',tweets[0].id)
      } catch (e) {
        console.log('error')
      }
    },
    async addLikes(tweet) {
      try {
        const { data } = await tweetAPI.addLike(tweet.id)
        // console.log('data',data)
        tweet.isLiked = !tweet.isLiked
        tweet.likeCount += 1
      } catch (error) {
        console.log('error')
      }
    },
    async deleteLikes(tweet) {
      try {
        const { data } = await tweetAPI.deleteLike(tweet.id)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        tweet.isLiked = !tweet.isLiked
        tweet.likeCount -= 1
      } catch (error) {
        console.log('error2')
      }
    }
  },

  beforeMount(){
    this.$bus.$on('fetch-MainTweetList', ()=>{
      this.fetchTweets()
    })
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  max-height: 80vh;
  overflow: scroll;
}

.tweet-list {
  position: relative;
  @include size(100%, 100%);
  display: flex;
  flex-direction: column;
}

.tweet-item {
  @include size(100%, 100%);
  display: flex;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  border-bottom: 1px solid var(--theme-line);
  padding: 15px;
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
  flex-flow: row wrap;
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

  button {
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 10px;
    }

    &:hover {
      span {
        color: var(--hover-color);
      }

      path {
        fill: var(--hover-color);
      }
    }
  }
}

.like-item {
  display: flex;
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