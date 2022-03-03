<template>
  <div class="container">
    <Sidebar /> 
    <div class="follower">
      <FollowerList 
      :followers="followers"/>
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import RightColumn from "../components/RightColumn.vue"
import FollowerList from "../components/FollowerList.vue"
import userAPI from "../apis/user";
import { mapState } from 'vuex';

export default {
  name: "UserFollowers",
  components: {
    Sidebar,
    RightColumn,
    FollowerList,
  },
  data() {
    return {
      follower: {
        followerId: '',
        followingId: '',
        createdAt: '',
        followers: {
            name: '',
            account: '',
            avatar: '',
            id: -1,
            introduction: ''
        },
        isFollowed:false,
      },
      followers: [],
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchFollowers(id)
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchFollowers(userId) {
      try {
        const { data } = await userAPI.getUserFollowers(userId)
        this.followers = data      
      } catch (error) {
        console.log(error)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.follower {
  @include size(100%, 100%);
  max-width: 600px;
  min-width: 576px;
  margin: 0 30px;
}
</style>