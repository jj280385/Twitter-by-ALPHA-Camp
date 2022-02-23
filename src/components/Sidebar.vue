<template>
  <div class="sidebar-container">
    <div class="sidebar-header">
      <img class="sidebar-logo" src="../assets/image/logo.svg" />
    </div>
    <div class="sidebar-items">
      <div class="sidebar-item home">
				<img
				v-if="isActive"
				@click="isActive= !isActive"
				class="item-icon" 
				src="../assets/image/home.svg" 
				/>
        <img 
				v-else
				class="item-icon" 
				src="../assets/image/home-active.svg" 
				/>
        <p class="item-link">
          <router-link to="/">首頁</router-link>
        </p>
      </div>

      <div class="sidebar-item userInfo active">
				<img
				class="item-icon" 
				v-if="isActive"
				@click="isActive=false"
				src="../assets/image/user-info.svg" />
        <img 
				v-else
				@click="isActive=true"
				class="item-icon" 
				src="../assets/image/user-info-active.svg" />
        <p class="item-link">
          <router-link to="/setting">個人資料</router-link>
        </p>
      </div>

      <div class="sidebar-item setting">
				<img 
				v-if="isActive"
				@click="isActive=false"
				class="item-icon" 
				src="../assets/image/setting.svg" />
        <img 
				v-else
				@click="isActive=true"
				class="item-icon" 
				src="../assets/image/setting-active.svg" />
        <p class="item-link">
          <router-link to="/setting">設定</router-link>
        </p>
      </div>

      <button class="twitter-btn" type="submit">推文</button>
    </div>
  </div>
</template>

<script>
export default {
  data (){
		return {
      isActive: true,
		}
	},
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 235px;
  height: 100%;
  @include flex(column, flex-start, flex-start);
  @include margin(4px, 40px, 0, 103px);
}

.sidebar-header {
  @include size(50px, 50px);
  margin-bottom: 35px;
  position: relative;
}

.sidebar-logo {
  @include size(40px, 40px);
  @include position(absolute, 50%, 0, 0, 50%);
  transform: translate(-50%, -50%);
}

.sidebar-item {
  color: var(--main-text);
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  margin-left: 10px;
}

.item-icon {
  margin-right: 20.9px;
  @include size(24px, 24px);
}

.home {
  margin-bottom: 30px;
}

.userInfo {
  margin-bottom: 31px;
}

.item-link {
  color: var(--main-text);
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  &:hover,
  &:focus,
  &:active {
    color: var(--theme-color);
  }
}

.twitter-btn {
  width: 210px;
  height: 38px;
  background-color: var(--theme-color);
  color: var(--button-text-color);
  border-radius: 100px;
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  &:hover {
    background-color: var(--hover-color);
  }
}

.newClass {
  box-shadow: 0px 0px 5px #000;
  background-color: green;
  color: #fff;
  padding: 3px 5px;
}

</style>