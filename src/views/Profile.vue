<template>
  <div class="container">
    <Sidebar />

    <div class="profile-container">
      <!-- 個人資料 -->
        <ProfileArea />

      <!-- 充當margin -->
      <div class="hidden-gap"></div>

      <!-- Navtabs -->
      <div class="nav-tabs">
        <button
          class="nav-item tweet"
          type="button"
          :class="{ active: isActive }"
        >
          <router-link
            to="/profile/tweet"
            class="nav-link"
            :class="{ active: isActive }"
          >
            推文
          </router-link>
        </button>

        <button class="nav-item reply" type="button">
          <router-link to="/profile/reply" class="nav-link">
            推文與回覆
          </router-link>
        </button>

        <button class="nav-item like" type="button">
          <router-link to="/profile/like" class="nav-link">
            喜歡的內容
          </router-link>
        </button>
      </div>

      <!-- 下方推文列表 -->
      <div class="tweet-list">
        <ProfileTweetList />
      </div>
    </div>
    <RightColumn />
    <!-- 覆蓋當前畫面之上 -->
    <ProfileEditModal />
    <Toast />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import RightColumn from '../components/RightColumn.vue'
import ProfileNavTabs from '../components/ProfileNavTabs.vue'
import ProfileTweetList from '../components/ProfileTweetList.vue'
// 覆蓋當前畫面之上
import ProfileArea from '../components/ProfileArea.vue'
import ProfileEditModal from '../components/ProfileEditModal.vue'
import Toast from '../components/Toast.vue'

export default {
  components: {
    Sidebar,
    RightColumn,
    ProfileArea,
    ProfileNavTabs,
    ProfileTweetList,
    ProfileEditModal,
    Toast
  },
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include flex(row, center, normal);
}

.profile-container {
  @include size(100%, 100%);
  border: 1px solid var(--theme-line);
  max-width: 600px;
  min-width: 576px;
  margin: 0 30px;
}

// 個人資料頁面尚未完成
.hidden-gap{
  @include size(100%, 35px);
  visibility: hidden
}



.nav-tabs {
  @include size(100%, 52px);
  display: flex;
  border-bottom: 1px solid var(--theme-line);
}

.nav-item {
  @include size(130px, 52px);
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
}

.nav-link {
  @include size(100%, 100%);
  @include flex(row, center, center);
}
</style>
