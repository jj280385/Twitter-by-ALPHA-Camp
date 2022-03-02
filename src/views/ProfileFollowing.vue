<template>
  <div class="container">
    <Sidebar /> 
    <div class="follower">
      <FollowingList 
      :followings="followings"/>
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import RightColumn from "../components/RightColumn.vue"
import FollowingList from "../components/FollowingList.vue"
import userAPI from "../apis/user";
import { mapState } from 'vuex';

export default {
  name: "UserFollowings",
  components: {
    Sidebar,
    RightColumn,
    FollowingList,
  },
  data() {
    return {
      following: {
        followerId: '',
        followingId: '',
        createdAt: '',
        followings: {
          name: '',
          account: '',
          avatar: '',
          id: -1,
          introduction: ''
        },
        isFollowed:false,
      },
      followings: [],
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
    this.fetchFollowings(id)
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchFollowings(userId) {
      try {
        const { data } = await userAPI.getUserFollowings(userId)
        this.followings = data
        console.log(this.followings)
        
      } catch (error) {
        console.log(error)
      }
    },
    async fetchUser (userId) {
      try {
        const { data } = await userAPI.getProfile({ userId })
        this.name = data.name
        this.tweetCount = data.tweetCount
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