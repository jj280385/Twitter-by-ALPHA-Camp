<template>
  <div id="AdminUsers">
    <Toast />
    <!-- AdminSidebar -->
    <AdminSidebar />
    <!-- AdminUsersCard -->
    <div class="AdminUsersPanel">
      <div class="title">
        <h1>使用者列表</h1>
      </div>
      <AdminUsersCard
        :users="Users"
      />
    </div>
  </div>
</template>

<script>
import AdminSidebar from '../components/AdminSidebar.vue'
import AdminUsersCard from '../components/AdminUsersCard.vue'
import adminAPI from '../apis/admin'
import Toast from '../components/Toast.vue'
export default {
  name: 'AdminMain',
  components: {
    AdminSidebar,
    AdminUsersCard,
    Toast
  },
  data() {
    return {
      user: {
        id: -1,
        account: '',
        name: '',
        avatar: '',
        cover: '',
        tweetCount: '',
        likeCount: '',
        followingCount: '',
        followerCount: ''
      },
      Users: [],
      isLoading: true,
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.adminGetUsers()
        console.log(data);
        this.Users = data
      } catch (error) {
        this.$bus.$emit('toast', { icon: 'error', title:  '無法取得使用者資料' })
        console.log(error)
      }
    },
  }
}
</script>

<style scoped>
#AdminUsers {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: auto;
}
.AdminUsersPanel {
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