<template>
  <div class="container">
    <Sidebar /> 
    <div class="main-reply">
      <MainReplyList />
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import RightColumn from "../components/RightColumn.vue"
import MainReplyList from "../components/MainReplyList.vue"

export default {
  components: {
    Sidebar,
    RightColumn,
    MainReplyList,
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
  outline: 1px solid red;
  @include size(100%, 100%);
  max-width: 600px;
  min-width: 576px;
  margin: 0 30px;
}
</style>