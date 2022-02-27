<template>
  <div class="container">
    <Sidebar /> 
    <div class="follower">
      <FollowingList />
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import RightColumn from "../components/RightColumn.vue"
import FollowingList from "../components/FollowingList.vue"

export default {
  components: {
    Sidebar,
    RightColumn,
    FollowingList,
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