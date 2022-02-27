<template>
  <div class="container">
    <Sidebar /> 
    <div class="follower">
      <FollowerList />
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import RightColumn from "../components/RightColumn.vue"
import FollowerList from "../components/FollowerList.vue"

export default {
  components: {
    Sidebar,
    RightColumn,
    FollowerList,
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