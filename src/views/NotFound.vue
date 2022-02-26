<template>
  <main>
    <h1>404 Page Not Found</h1>
    <ProfileEditModal />
    <ReplyModal />
    <TweetModal />
  </main>
</template>

<script>
import TweetModal from "../components/TweetModal.vue";
import ReplyModal from "../components/ReplyModal.vue";
import ProfileEditModal from "../components/ProfileEditModal.vue";
export default {
  components: {
    TweetModal,
    ReplyModal,
    ProfileEditModal,
  },
};
</script>
