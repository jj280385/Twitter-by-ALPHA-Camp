// 其他使用者的推文回覆主頁
<template>
  <div class="container">
    <Sidebar /> 
    <div class="main-reply">
      <OtherUserPostList />
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import RightColumn from "../components/RightColumn.vue"
import OtherUserPostList from "../components/OtherUserPostList.vue"

export default {
  components: {
    Sidebar,
    RightColumn,
    OtherUserPostList,
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