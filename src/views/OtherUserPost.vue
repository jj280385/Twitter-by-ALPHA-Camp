// 其他使用者的推文回覆主頁
<template>
  <div class="container">
    <Sidebar />
    <div class="main-reply">
      <OtherUserPostList />
    </div>
    <RightColumn />
    <ReplyModal />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import RightColumn from '../components/RightColumn.vue'
import OtherUserPostList from '../components/OtherUserPostList.vue'
import ReplyModal from '../components/ReplyModal.vue'

export default {
  components: {
    Sidebar,
    RightColumn,
    OtherUserPostList,
    ReplyModal
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main-reply {
  @include size(100%, 100%);
  max-width: 600px;
  min-width: 576px;
  margin: 0 30px;
}
</style>
