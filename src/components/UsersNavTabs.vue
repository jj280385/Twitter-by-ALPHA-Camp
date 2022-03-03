<template>
  <div class="profile-list">
    <div class="nav-tabs">
      <button
        class="nav-item tweet"
        type="button"
      >
        <router-link 
        :to="{path: `/users/${$route.params.id}/tweet`}" 
        class="nav-link"
        > 推文 </router-link>
      </button>

      <button
        class="nav-item reply"
      >
        <router-link 
        :to="{path: `/users/${$route.params.id}/reply`}"
        class="nav-link"
        > 推文與回覆 </router-link>
      </button>

      <button
        class="nav-item like"
      >
        <router-link 
        :to="{path: `/users/${$route.params.id}/like`}"
        class="nav-link"
        > 喜歡的內容 </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-list {
  @include size(100%, 100%);
}

.nav-tabs {
  @include size(100%, 52px);
  display: flex;
  border-bottom: 1px solid var(--theme-line);
}

.nav-item, .nav-link {
  @include size(130px, 52px);
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  color: var(--info);
  display: flex;
  align-items: center;
  justify-content: center;
  &.active,
  &:focus {
    border-bottom: 2px solid var(--theme-color);
    color: var(--theme-color);
  }
}

</style>