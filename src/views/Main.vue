<template>
  <div class="container">
    <Sidebar />
    <div class="main">
      <!-- title -->
      <div class="main-header">
        <span class="title">首頁</span>
      </div>
      <!-- 推文區域 -->
      <div v-modal="tweet" class="tweet-area">
        <div class="avatar">
          <router-link to="/">
            <img :src="currentUser.avatar | nullAvatar" alt="預設的頭像" />
          </router-link>
        </div>

        <!-- 推文輸入框 -->
        <input
          v-model="tweet"
          type="text"
          class="text-area"
          placeholder="有什麼新鮮事？"
        />
        <button
          @click.stop.prevent="submitTweet"
          :disabled="isProcessing"
          class="tweet-btn"
          type="button"
        >
          推文
        </button>
      </div>
      <MainTweetList />
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import RightColumn from '../components/RightColumn.vue'
import MainTweetList from '../components/MainTweetList.vue'
import { mapState } from 'vuex'
import { nullAvatarFilter } from './../utils/mixins'
import tweetAPI from '../apis/tweet'

export default {
  mixins: [nullAvatarFilter],
  data() {
    return {
      tweet: '',
      isProcessing:false
    }
  },

  components: {
    Sidebar,
    RightColumn,
    MainTweetList
  },
  computed: {
    ...mapState(['currentUser'])
  },

  methods: {
    async submitTweet() {
      try {
        if (!this.tweet) {
          this.tweetHint = 'empty'
          this.$bus.$emit('toast', { icon: 'error', title: '內容不可空白' })
          return
        }

        if (this.tweet.length > 140) {
          this.tweetHint = 'empty'
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '字數不可超過 140 字'
          })
          return
        }

        this.isProcessing = true

        const { data } = await tweetAPI.submitTweet({ description: this.tweet })
        console.log(data)

        if (data.status === 'success') {
          this.$bus.$emit('toast', {
            icon: 'success',
            title: '推文發送成功'
          })
        } else {
          throw new Error(data.message)
        }
        this.modal = false
        this.isProcessing = false
        this.tweet = ''
      } catch (error) {
        console.log(error)
        this.isProcessing = false
        this.$bus.$emit('toast', {
          icon: 'error',
          title: `${error}`
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main {
  @include size(100%, 100%);
  max-width: 600px;
  min-width: 576px;
  margin: 0 30px;
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

input[type='text'] {
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
</style>
