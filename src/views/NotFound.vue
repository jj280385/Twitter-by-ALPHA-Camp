<template>
  <main>
    <h1>404 Page Not Found</h1>
    <ProfileModal/>
    <ReplyModal/>
    <TweetModal/>
  </main>
</template>

<script>
import TweetModal from '../components/TweetModal.vue'
import ReplyModal from '../components/ReplyModal.vue'
import ProfileModal from '../components/ProfileModal.vue'
export default {
  components: {
   TweetModal, ReplyModal,ProfileModal
  }
}
</script>
