<template>
  <div class="sidebar-container">
    <div class="sidebar-header">
      <router-link to="/" class="sidebar-logo">
        <!-- Logo SVG -->
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.6996 23.4709C30.6996 23.4709 23.2328 35.5781 17.1109 35.5781C6.40314 35.5781 16.3821 12.5132 24.1916 12.5132C29.641 12.5132 30.6996 23.4709 30.6996 23.4709Z"
            fill="#FF6600"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.5723 38.6972C37.4451 40.9607 34.8198 42.6976 31.9044 43.7701C28.989 44.8426 25.8639 45.2213 22.7767 44.8761C19.6895 44.5309 16.7252 43.4713 14.1188 41.7813C11.5125 40.0914 9.33573 37.8175 7.76123 35.1401C9.5314 37.5477 12.5338 39.1527 16.803 39.1527C27.3199 39.1527 33.2899 30.98 33.2899 30.98C33.2899 30.98 33.8062 37.4392 39.5593 38.6972H39.5723Z"
            fill="#FF6600"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.7223 15.7451C44.2963 18.7527 45.0781 22.1116 44.9939 25.505C44.9096 28.8984 43.9621 32.2144 42.2407 35.1401C40.8792 34.3764 39.8725 33.1082 39.4379 31.609L37.1558 24.7724L42.7223 15.7451Z"
            fill="#FF6600"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0031 5.01737C30.0185 5.01403 34.8513 6.89881 38.5398 10.2967L34.7521 16.4088C33.3811 12.843 30.5957 9.2729 25.1767 9.2729C14.0784 9.2729 5.85231 21.3888 5.85231 28.9846C5.84986 29.9669 5.97528 30.9454 6.22543 31.8953C5.11558 28.8725 4.75205 25.6265 5.16572 22.4331C5.57938 19.2398 6.75802 16.1934 8.60147 13.5531C10.4449 10.9127 12.8987 8.75634 15.7542 7.26726C18.6097 5.77818 21.7826 5.00039 25.0031 5V5.01737Z"
            fill="#FF6600"
          />
        </svg>
        <!-- Logo SVG -->
      </router-link>
    </div>
    <div class="sidebar-items">
      <!-- TODO:item中的icon和item-name的變色功能v-fi /v-else尚未設定 -->
      <button
        @click="activeTab = 'home'"
        :class="{ active: activeTab === 'home' }"
        class="sidebar-item home"
        type="button"
      >
        <router-link to="/admin/main">
          <!-- Home SVG -->
          <svg
            class="item-icon"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.58 6.34986L12.475 0.896855C12.178 0.736855 11.821 0.736855 11.525 0.896855L1.42502 6.34986C0.939018 6.61386 0.758018 7.21986 1.02002 7.70586C1.20002 8.04086 1.54502 8.23086 1.90002 8.23086C2.06002 8.23086 2.22402 8.19286 2.37502 8.11086L3.10902 7.71486L4.69902 18.9649C4.91502 20.1789 6.00902 21.0269 7.35902 21.0269H16.641C17.991 21.0269 19.085 20.1789 19.303 18.9389L20.891 7.71386L21.628 8.11186C22.113 8.37486 22.72 8.19386 22.982 7.70786C23.245 7.22186 23.062 6.61486 22.578 6.35286L22.58 6.34986ZM12 14.4349C10.205 14.4349 8.75002 12.9799 8.75002 11.1849C8.75002 9.38986 10.205 7.93486 12 7.93486C13.795 7.93486 15.25 9.38986 15.25 11.1849C15.25 12.9799 13.795 14.4349 12 14.4349Z"
              fill="#1C1C1C"
            />
          </svg>
          <!-- Home SVG -->
          <div class="item-name">推文清單</div>
        </router-link>
      </button>

      <button
        @click="activeTab = 'userInfo'"
        :class="{ active: activeTab === 'userInfo' }"
        class="sidebar-item userInfo"
        type="button"
      >
        <router-link to="/profile">
          <!-- User SVG -->
          <svg
            class="item-icon"
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00003 10.8158C10.355 10.8158 11.872 10.6658 12.84 9.55976C13.654 8.62976 13.918 7.19176 13.646 5.16776C13.266 2.34276 11.529 0.655762 9.00003 0.655762C6.47103 0.655762 4.73403 2.34276 4.35403 5.16976C4.08203 7.19176 4.34603 8.62976 5.16003 9.55976C6.12803 10.6668 7.64503 10.8158 9.00003 10.8158ZM5.84003 5.36776C6.00203 4.16776 6.62703 2.15576 9.00003 2.15576C11.373 2.15576 11.998 4.16876 12.16 5.36776C12.367 6.91776 12.217 7.99476 11.71 8.57276C11.255 9.09276 10.444 9.31576 9.00003 9.31576C7.55603 9.31576 6.74503 9.09276 6.29003 8.57276C5.78303 7.99476 5.63303 6.91676 5.84003 5.36776ZM17.28 18.2358C16.403 14.7098 12.998 12.2458 9.00003 12.2458C5.00203 12.2458 1.59703 14.7098 0.720027 18.2358C0.548027 18.9278 0.692027 19.6358 1.11503 20.1758C1.52303 20.6958 2.15503 20.9958 2.84803 20.9958H15.152C15.845 20.9958 16.477 20.6958 16.885 20.1758C17.309 19.6358 17.452 18.9288 17.279 18.2358H17.28ZM15.704 19.2518C15.578 19.4118 15.388 19.4978 15.152 19.4978H2.84803C2.61303 19.4978 2.42203 19.4128 2.29603 19.2518C2.15903 19.0778 2.11603 18.8398 2.17603 18.5978C2.88603 15.7428 5.69303 13.7478 9.00003 13.7478C12.307 13.7478 15.114 15.7418 15.824 18.5978C15.884 18.8398 15.841 19.0778 15.704 19.2518Z"
              fill="black"
            />
          </svg>
          <!-- User SVG -->
          <div class="item-name">使用者列表</div>
        </router-link>
      </button>
    </div>
    <button class="logout-item">
        <router-link to="/login">
          <img src="../assets/image/logout.svg" class="logout-icon" />
          <span class="logout">登出</span>
        </router-link>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 有home, userInfo, setting 三種
      // 這裡預設寫死 setting
      activeTab: "setting",
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 235px;
  height: 100%;
  @include flex(column, flex-start, flex-start);
  @include margin(4px, 0, 0, 103px);
}

.sidebar-header {
  @include size(50px, 50px);
  margin-bottom: 35px;
  position: relative;
}

.sidebar-logo {
  @include size(50px, 50px);
  @include position(absolute, 50%, 0, 0, 50%);
  transform: translate(-50%, -50%);

  &.active {
    color: var(--theme-color);
    svg > path {
      fill: var(--theme-color);
    }
  }

  &:hover {
    color: var(--hover-color);
    svg > path {
      fill: var(--hover-color);
    }
  }

  &:focus {
    color: var(--focus-color);
    svg > path {
      fill: var(--focus-color);
    }
  }
}

.sidebar-item {
  @include flex(row, flex-start, center);
  align-content: center;
  margin-left: 10px;

  &:nth-child(2) {
    margin-top: 30px;
    margin-bottom: 31px;
  }

  color: var(--main-text);
  svg > path {
    fill: var(--main-text);
  }

  &.active {
    color: var(--theme-color);
    svg > path {
      fill: var(--theme-color);
    }
  }

  &:hover {
    color: var(--hover-color);
    svg > path {
      fill: var(--hover-color);
    }
  }

  &:focus {
    color: var(--focus-color);
    svg > path {
      fill: var(--focus-color);
    }
  }
}

.item-name {
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
}

.item-icon {
  margin-right: 20px;
  @include size(24px, 24px);
}

a {
  @include flex(row, flex-start, center);
}

.twitter-btn {
  @include size(210px, 38px);
  background-color: var(--theme-color);
  color: var(--just-white);
  border-radius: 100px;
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  &:hover {
    background-color: var(--hover-color);
  }
  &:active,
  &:focus {
    background-color: var(--focus-color);
  }
}

// TODO: 下面這個要刪除嗎?
.newClass {
  box-shadow: 0px 0px 5px #000;
  background-color: green;
  color: #fff;
  padding: 3px 5px;
}

.logout-item {
  position: absolute;
  bottom: 17px;
  @include size(80px, 26px);
  margin-left: 8px;
  display: flex;
}

.logout-icon {
  @include size(24px, 24px);
}

.logout {
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
}
</style>