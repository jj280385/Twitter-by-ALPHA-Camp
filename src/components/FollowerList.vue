<template>
  <div class="follower-container">
    <!-- title -->
    <div class="follower-header">
      <button type="button" class="back-to">
        <router-link to="/">
          <img class="back-icon" src="../assets/image/back-icon.svg" />
        </router-link>
      </button>
      <div class="title">
        <span class="name">{{ name }}</span>
        <p>{{ tweetCount }} 推文</p>
      </div>
    </div>
    <!-- NavTabs 切換分頁 -->
    <div class="nav-tabs">
      <button class="nav-item" type="button" :class="{ active: isActive }">
        <router-link
          :to="{ name: 'user-follower', params: { id } }"
          class="nav-link"
          :class="{ active: isActive }"
        >
          跟隨者
        </router-link>
      </button>

      <button class="nav-item" type="button">
        <router-link
          :to="{ name: 'user-following', params: { id } }"
          class="nav-link"
        >
          正在跟隨
        </router-link>
      </button>
    </div>

    <!-- 追隨者列表 -->
    <div class="follower-list">
      <div class="list-item" v-for="follower in followers" :key="follower.id">
        <div class="user-info">
          <div class="user-avatar">
            <router-link to="/user/" class="avatar-img">
              <img class="avatar-img" :src="follower.Followings.avatar" />
            </router-link>
          </div>
          <div class="content">
            <router-link to="/profile">
              <div class="user-name">{{ follower.Followings.name }}</div>
              <div class="user-accountName">
                @{{ follower.Followings.account }}
              </div>
            </router-link>
            <span class="introduce">
              {{ follower.Followings.introduction }}
            </span>
          </div>
        </div>
        <div class="toggleBtn" v-if="follower.isFollowed">
          <button
            class="unfollowed-btn"
            @click.stop.prevent="addFollow(follower.Followings.id)"
          >
            追隨
          </button>
        </div>
        <div class="toggleBtn" v-else>
          <button
            class="following-btn"
            @click.stop.prevent="removeFollow(follower.Followers.id)"
          >
            正在追隨
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import userAPI from '../apis/user'
import followAPI from '../apis/follow'
export default {
  name: 'FollowerList',
  props: {
    followers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      id: '',
      name: '',
      tweetCount: '',
      isActive: true
    }
  },
  created() {
    const { id } = this.$route.params
    console.log(id)

    this.fetchUser(id)
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.getProfile({ userId })
        this.id = await data.id
        this.name = data.name
        this.tweetCount = data.tweetCount
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.follower-container {
  @include size(100%, 100%);
  border: 1px solid var(--theme-line);
}

.follower-header {
  @include size(100%, 55px);
  display: flex;
  align-items: center;
}

.back-icon {
  @include size(14px, 17px);
  margin: 0 43px 0 15px;
}

.title {
  color: var(--main-text);
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
}

.nav-tabs {
  display: flex;
  border-bottom: 1px solid var(--theme-line);
}

.nav-item {
  @include size(130px, 54px);
  @include flex(row, center, center);
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  color: var(--info);
  &.active,
  &:focus {
    border-bottom: 2px solid var(--theme-color);
    color: var(--theme-color);
  }
  &:hover {
    border-bottom: 2px solid var(--hover-color);
    color: var(--hover-color);
  }
}

.name {
  color: var(--main-text);
  font-size: 19px;
  font-weight: 700;
  line-height: 27.51px;
}

p {
  color: var(--info);
  font-size: 13px;
  font-weight: 500;
  line-height: 18.82px;
}

.list-item {
  @include flex(row, normal, center);
  position: relative;
  padding: 10px 15px 10px 15px;
  border-bottom: 1px solid var(--theme-line);
  height: 104px;
}

.user-info {
  @include flex(row, normal, center);
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
}

.user-avatar {
  @include size(50px, 50px);
  margin-right: 10px;
}

.avatar-img {
  @include size(50px, 50px);
  background-color: var(--avatar-img-background);
  border-radius: 50%;
  &:hover {
    background-color: darkgray;
  }
}

.user-name {
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  color: var(--main-text);
  &:hover {
    text-decoration: underline;
  }
}

.user-accountName {
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  color: var(--info);
  margin-top: 3px;
  &:hover {
    text-decoration: underline;
  }
}

.introduce {
  @include size(510px, 44px);
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  color: var(--main-text);
  margin-right: 15px;
}

.following-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  @include size(90px, 25px);
  color: var(--just-white);
  background-color: var(--theme-color);
  border-radius: 100px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  &:hover {
    background-color: var(--hover-color);
  }
}

.unfollowed-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  @include size(60px, 25px);
  color: var(--theme-color);
  border: 1px solid var(--theme-color);
  border-radius: 100px;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  &:hover {
    color: var(--just-white);
    background-color: var(--hover-color);
  }
}
</style>
