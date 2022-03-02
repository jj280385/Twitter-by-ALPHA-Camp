<template>
  <div class="tweet-container" >
    <!-- Profile頁面下方的推文列表 -->
    <div class="tweet-list">
      <div class="tweet-item">
        <div class="user-avatar">
          <router-link to="/profile">
            <img class="avatar-img"/>
          </router-link>
        </div>
        <div class="post-content">
          <router-link to="/profile">
            <div class="user-info">
              <div class="user-name">123</div>
              <div class="user-accountName">@hryjohn</div>
              <div class="post-time">‧3小時</div>
            </div>
          </router-link>
          <span class="tweet-content">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
          <div class="icon-item">
            <router-link class="reply" to="/profile">
              <img class="reply-icon" src="../assets/image/reply-icon.svg" />
              <span class="replay-count">13</span>
            </router-link>

            <router-link class="like" to="/profile">
              <img class="like-icon" src="../assets/image/like-icon.svg" />
              <span class="like-count">76</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="tweet-item">
        <div class="user-avatar">
          <router-link to="/profile">
            <img class="avatar-img" />
          </router-link>
        </div>
        <div class="post-content">
          <router-link to="/profile">
            <div class="user-info">
              <div class="user-name">Jhon Deo</div>
              <div class="user-accountName">@hryjohn</div>
              <div class="post-time">‧3小時</div>
            </div>
          </router-link>
          <span class="tweet-content">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
          <div class="icon-item">
            <router-link class="reply" to="/profile">
              <img class="reply-icon" src="../assets/image/reply-icon.svg" />
              <span class="replay-count">13</span>
            </router-link>

            <router-link class="like" to="/profile">
              <img class="like-icon" src="../assets/image/like-icon.svg" />
              <span class="like-count">76</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.tweet-container {
  @include size(100%, 100%);
  margin-top: 10px;
}

.tweet-list {
  position: relative;
  @include size(100%, 100%);
  display: flex;
  flex-direction: column;
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
  flex-wrap: wrap;
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

// <script>
// import userAPI from './../apis/user'

// export default {
//   data() {
//     return {
//       tweets:{
//       id: -1,
//       description:'',
//       likeCount:0,
//       replyCount:0,
//       isLike: true,
//       createdAt:'',
//       User: {},
//       }
//     }
//   },
//   created() {
//     const { userId } = this.$route.params;
//     this.fetchTweets(userId);
//   },
//   beforeRouteUpdate(to, from, next) {
//     const { userId } = to.params;
//     this.fetchTweets(userId);
//     next();
//   },
//   methods: {
//       // async fetchTweets(userId) {   
//       // try {
//       //   const response = await userAPI.getUserTweetList({
//       //     userId: this.$route.params.id,
//       //   });

//       //   const tweets = response.data;
//       //   this.tweets = tweets;
//       //   console.log('data',response.data);
//       //   } catch (error) {
//       //   console.log("error");
//       //   }
//       // }
//     async fetchTweets(userId) {
//       try {
//         const response = await userAPI.getUserTweetList(userId)
//         const tweets = response.data;
//         this.tweets = tweets;
//         // const {id,
//         // description,
//         // likeCount,
//         // replyCount,
//         // isLike,
//         // createdAt,
//         // User}
//         // = data
        
//         // this.id = id;
//         // this.description = description;
//         // this.likeCount = likeCount;
//         // this.replyCount = replyCount;
//         // this.isLike = isLike;
//         // this.createdAt = createdAt;
//         // this.User = User;

//         console.log('data',response)
//       } catch (error) {
//         console.log(error);
//       }
//     },
//   }
// };
// </script>