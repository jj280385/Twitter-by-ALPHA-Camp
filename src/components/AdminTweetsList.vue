<template>
<div class="list-contents">
    <div 
    class="list-content"
    v-for="tweet in Tweets"
    :key="tweet.id"
      >
      <div class="user-avatar">
        <img class="user-avatar-img" :src=" tweet.User.avatar " alt="" />
      </div>
      <div class="content-detail">
        <div class="detail">{{ tweet.User.name }}
          <span class="account-date">@{{ tweet.User.account }}・{{ tweet.createdAt }}</span>
          <div class="del-btn" @click.stop.prevent="handleDeleteButtonClick(tweet.id)">
            x
          </div>
        </div>
        <div class="description">{{ tweet.description | slice }}</div>
      </div>
    </div>
 </div>
  

</template>

<script>
import { Toast } from '../utils/helper'
export default {
  name: 'AdminTweetsList',
  props: {
    Tweets: {
      type: Array,
      required: true
    }
  },
  watch: {
    Tweets(newValue) {
      console.log(newValue);
      this.tweet = {
        ...this.tweet,
        ...newValue
      }
    }
  },
  methods: {
    handleDeleteButtonClick(tweetId) {
      this.$emit('after-delete-tweet', tweetId)
      Toast.fire({
        icon: 'success',
        title: '刪除成功！'
      })
    }
  },
  filters: {
    slice(description) {
      if (!description) return '-'
      return description.slice(0, 50)
    }
  }
}
</script>

<style scoped>
.list-contents .list-content {
  width: 100%;
  height: 75px;
  display: flex;
  border-top: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
}

.list-contents .list-content:first-child {
  height: 80px;
  padding-top: 5px;
}

.list-contents .list-content .user-avatar {
  height: 100%;
  width: 80px;
}

.list-contents .list-content .user-avatar .user-avatar-img {
  background-color: aqua;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 13px 15px 12px;
}

.list-contents .list-content .content-detail {
  height: 100%;
  width: 100%;
}

.list-contents .list-content .content-detail .detail {
  margin-right: 5px;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
  margin-top: 10px;
  font-weight: bold;
  position: relative;
}

.list-contents .list-content .content-detail .detail .account-date {
  font-size: 15px;
  line-height: 21.72px;
  color: #657786;
  font-weight: 500;
}

.list-contents .list-content .content-detail .description {
  margin-top: 6px;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
}

.list-contents .list-content .content-detail .del-btn {
  width: 15px;
  height: 15px;
  position: absolute;
  right: 19.5px;
  top: 0;
  cursor: pointer;
}
</style>