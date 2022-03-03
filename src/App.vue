<template>
  <main>
    <router-view />
    <Toast />
  </main>
</template>

<style lang="scss">
// 安裝字體
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import './styles/reset.scss';
@import './styles/layout.scss';
@import './styles/font.scss';
@import './styles/color.scss';
</style>

<script>
import Toast from './components/Toast.vue'

export default {
  components: { Toast }
}
</script>
