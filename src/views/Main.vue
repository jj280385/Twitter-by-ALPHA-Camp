<template>
  <div class="container">
    <Sidebar /> 
    <div class="main">
      <MainTweetList />
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import RightColumn from "../components/RightColumn.vue"
import MainTweetList from "../components/MainTweetList.vue"

export default {
  components: {
    Sidebar,
    RightColumn,
    MainTweetList,
  },

  
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main {
  @include size(100%, 100%);
  max-width: 600px;
  min-width: 576px;
  margin: 0 30px;
}
</style>