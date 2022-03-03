<template>
  <div id="AdminMain">
    <!-- AdminSidebar -->
    <AdminSidebar />
    <!-- AdminTweetsList -->
    <div class="AdminTweetsPanel">
      <div class="title">
        <h1>推文清單</h1>
      </div>
      <AdminTweetsList
        :Tweets="Tweets"
        @after-delete-tweet="afterDeleteTweet"
      />
    </div>
  </div>
</template>

<script>
import AdminSidebar from './../components/AdminSidebar.vue'
import AdminTweetsList from './../components/AdminTweetsList.vue'
import adminAPI from './../apis/admin'
export default {
  name: 'AdminMain',
  components: {
    AdminSidebar,
    AdminTweetsList,
  },
  data() {
    return {
      tweet: {
        id: -1,
        description: '',
        UserId: '',
        createdAt: '',
        account: '',
        name: '',
        avatar: '',
      },
      Tweets: [],
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await adminAPI.adminGetTweets()
        this.Tweets = data.data
      } catch (error) {
        this.$bus.$emit('toast', { icon: 'error', title:  '無法取得推文資料' })
        console.log(error)
      }
    },
    async afterDeleteTweet(id) {
      try {
        console.log(id);
        const { data } = await adminAPI.adminDeleteTweet(id)
        console.log(data)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.Tweets = this.Tweets.filter(tweet => tweet.id !== id)
        this.$bus.$emit('toast', { icon: 'success', title:  '推文刪除成功' })
      } catch (error) {
        this.$bus.$emit('toast', { icon: 'error', title:  '無法將推文刪除' })
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
#AdminMain {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: auto;
}
.AdminTweetsPanel {
  flex: 1;
  min-height: 100vh;
}
.title {
  height: 55px;
  border-left: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  left: 337px;
  width: 100%;
}
.title h1 {
  font-size: 19px;
  font-weight: 700;
  padding: 13px 0 14px 23px;
  margin: 0;
}
</style>