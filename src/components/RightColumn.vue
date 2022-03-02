<template>
  <div class="column-container">
    <div class="column-header">
      <span class="column-title"> Popular </span>
    </div>
    <div class="column-list">
      <div class="items-container">
        <!-- TODO: 待和後端串接data後使用v-for將list-item迭代 -->
        <div class="list-item" v-for="user in users" :key="user.id">
          <div class="user-info">
            <div class="user-avatar">
              <router-link :to="{path: `/users/${user.id}`}">
                <img class="avatar-img" :src="user.avatar"/>
              </router-link>
            </div>
            <router-link :to="{path: `/users/${user.id}`}">
              <div class="user-name">{{ user.name }}</div>
              <div class="user-accountName">@{{ user.account }}</div>
            </router-link>
          </div>
          <button class="following-btn">正在追隨</button>
          <!-- <button class="unfollowed-btn">追隨</button> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "../apis/user"

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await userAPI.getUsersTop()
        const users = data
        this.users = data

        // console.log('data', data)
        // console.log('user', users)
      } catch (error) {
        console.log('error')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.column-container {
  @include size(350px, 756px);
  margin-top: 15px;
  border-radius: 14px;
  background-color: var(--column-background-color);
}

.column-header {
  @include size(350px, 45px);
  padding: 10px 15px;
}

.column-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
}

.list-item {
  position: relative;
  @include size(100%, 70px);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--theme-line);
}

.user-info {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
}

.user-avatar {
  @include size(50px, 50px);
  margin-right: 10px;
}

.avatar-img {
  background-color: var(--avatar-img-background);
  border-radius: 50%;
  &:hover {
    background-color: darkgray;
  }
}

.user-name {
  color: var(--main-text);
  &:hover {
    text-decoration: underline;
  }
}

.user-accountName {
  color: var(--info);
  margin-top: 3px;
  &:hover {
    text-decoration: underline;
  }
}

.following-btn {
  position: absolute;
  right: 15px;
  @include size(90px, 35px);
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
  @include size(60px, 35px);
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