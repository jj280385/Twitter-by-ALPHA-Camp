<template>
  <div class="container">
    <Sidebar /> 
    <div class="main-container">
      <span class="page-title"> 首頁 </span>
    </div>
    <RightColumn />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue"
import RightColumn from "../components/RightColumn.vue"

export default {
  components: {
    Sidebar,
    RightColumn,
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main-container {
  @include size(100%, 100%);
  max-width: 600px;
  min-width: 576px;
  margin: 0 30px;
}
</style>