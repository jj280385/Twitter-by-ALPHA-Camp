<template>
  <div class="profile-area">
    <div class="header d-flex align-items-center">
      <button
        @click="$router.go(-1)"
        class="previous d-flex justify-content-center align-items-center"
      >
        <!-- previous SVG -->
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
            fill="black"
          />
        </svg>

        <!-- previous SVG -->
      </button>
      <div>
        <h3 class="name">{{ name }}</h3>
        <p>{{ tweetCount }}&ensp;推文</p>
      </div>
    </div>
    <!-- user-photo -->
    <div class="user-photo">
      <img class="cover" :src="cover | nullCover" alt="預設的使用者封面" />
      <div class="avatar">
        <img :src="avatar | nullAvatar" alt="預設的使用者頭像" />
        <div class="mask"></div>
      </div>
    </div>
    <div class="user-info">
      <div class="toolbar d-flex justify-content-end align-items-center">
        <template v-if="!isSelf">
          <button class="message">
            <!-- message SVG -->
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17.5" cy="17.5" r="17" stroke="#FF6600" />
              <path
                d="M23.8438 9.64062H11.1562C9.82888 9.64062 8.75 10.7204 8.75 12.0486V22.9817C8.75 24.31 9.82888 25.3906 11.1562 25.3906H23.8438C25.1711 25.3906 26.25 24.31 26.25 22.9817V12.0486C26.25 10.7204 25.1711 9.64062 23.8438 9.64062ZM11.1562 10.9531H23.8438C24.4475 10.9531 24.9375 11.4431 24.9375 12.0469V12.6716L17.8937 17.3678C17.6549 17.5253 17.346 17.527 17.1063 17.366L10.0625 12.6716V12.0469C10.0625 11.4431 10.5525 10.9531 11.1562 10.9531V10.9531ZM23.8438 24.0764H11.1562C10.5525 24.0764 10.0625 23.5864 10.0625 22.9826V14.2099L16.3975 18.4361C16.7326 18.6601 17.1168 18.7721 17.5 18.7721C17.885 18.7721 18.2674 18.6601 18.6025 18.437L24.9375 14.2108V22.98C24.9375 23.5838 24.4475 24.0738 23.8438 24.0738V24.0764Z"
                fill="#FF6600"
              />
            </svg>

            <!-- message SVG -->
          </button>

          <button v-if="isNotify" class="notify-active">
            <!-- notify SVG -->
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="17.5"
                cy="17.5"
                r="17"
                fill="#FF6600"
                stroke="#FF6600"
              />
              <path
                d="M27.6584 7.1313C27.3302 6.9703 26.9391 7.10505 26.7781 7.4288L24.2721 12.4828L22.782 10.899C22.5344 10.6339 22.1187 10.6225 21.8545 10.871C21.5902 11.1195 21.578 11.536 21.8265 11.7985L23.9641 14.07C24.0892 14.2013 24.2616 14.2757 24.4419 14.2757C24.4734 14.2757 24.5057 14.273 24.5381 14.2687C24.7507 14.2372 24.9336 14.1024 25.0299 13.9099L27.9541 8.01242C28.1151 7.68692 27.9821 7.29317 27.6566 7.13217L27.6584 7.1313ZM23.6404 21.5469C23.5677 21.4909 21.8519 20.125 21.8816 16.5069C21.9009 14.378 21.1991 12.4854 19.9076 11.1782C18.7491 10.0057 17.1811 9.35555 15.4924 9.34767H15.481C13.7922 9.35642 12.2242 10.0039 11.0657 11.1782C9.7751 12.4863 9.07335 14.3789 9.09085 16.5087C9.12235 20.125 7.40823 21.49 7.34085 21.5425C7.11335 21.7114 7.01973 22.0063 7.1081 22.2758C7.19735 22.5453 7.44935 22.7264 7.7311 22.7264H11.3011C11.3781 24.9752 13.22 26.7864 15.488 26.7864C17.756 26.7864 19.5987 24.9752 19.6749 22.7264H23.2466C23.5266 22.7264 23.7751 22.5462 23.8652 22.2802C23.9554 22.0142 23.8635 21.7175 23.6412 21.5469H23.6404ZM15.4871 24.9489C14.2324 24.9489 13.2121 23.9628 13.1386 22.7264H17.8356C17.7612 23.9628 16.7419 24.9489 15.4871 24.9489Z"
                fill="white"
              />
            </svg>

            <!-- notify SVG -->
          </button>

          <button v-if="!isNotify" class="notify">
            <!-- notify SVG -->
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17.5" cy="17.5" r="17" stroke="#FF6600" />
              <path
                d="M27.3351 9.85253H25.2132V7.72803C25.2132 7.36578 24.9192 7.07178 24.557 7.07178C24.1947 7.07178 23.9007 7.36578 23.9007 7.72803V9.85253H21.7788C21.4166 9.85253 21.1226 10.1457 21.1226 10.5088C21.1226 10.8719 21.4166 11.165 21.7788 11.165H23.9016V13.286C23.9016 13.6483 24.1956 13.9423 24.5578 13.9423C24.9201 13.9423 25.2141 13.6483 25.2141 13.286V11.165H27.336C27.6991 11.165 27.9922 10.8702 27.9922 10.5088C27.9922 10.1474 27.6982 9.85253 27.336 9.85253H27.3351ZM21.8838 16.5078C21.9013 14.378 21.1996 12.4854 19.9081 11.179C18.7496 10.0048 17.1816 9.35553 15.4928 9.34765H15.4815C13.7927 9.3564 12.2247 10.0039 11.0662 11.1782C9.77559 12.4863 9.07384 14.3789 9.09134 16.5087C9.12284 20.125 7.40872 21.49 7.34134 21.5425C7.11384 21.7114 7.02022 22.0063 7.10859 22.2758C7.19784 22.5453 7.44984 22.7264 7.73159 22.7264H11.8581C11.9543 24.6742 13.5556 26.2325 15.5278 26.2325C17.5001 26.2325 19.1005 24.675 19.1976 22.7264H23.2445C23.5245 22.7264 23.773 22.5462 23.8631 22.2802C23.9532 22.0142 23.8631 21.7175 23.64 21.5469C23.5682 21.4909 21.8523 20.125 21.883 16.5069L21.8838 16.5078ZM15.527 24.92C14.2792 24.92 13.2642 23.9488 13.1697 22.7255H17.8842C17.7897 23.9505 16.7747 24.9192 15.527 24.9192V24.92ZM9.14822 21.4139C9.76247 20.4558 10.4231 18.8729 10.403 16.4982C10.3881 14.6939 10.9402 13.1732 11.9998 12.1013C12.9125 11.1773 14.1506 10.6663 15.4876 10.661C16.8237 10.6672 18.0627 11.1773 18.9745 12.1013C20.0332 13.174 20.5845 14.6939 20.5696 16.4982C20.5503 18.8729 21.2101 20.4558 21.827 21.4139H9.14822V21.4139Z"
                fill="#FF6600"
              />
            </svg>
            <!-- notify SVG -->
          </button>

          <button
            @click="toggleFollow"
            class="follow"
            :class="{ active: isFollowed }"
          >
            {{ isFollowed ? '正在跟隨' : '跟隨' }}
          </button>
        </template>

        <button
          @click="$bus.$emit('profileEditModal', true)"
          v-if="isSelf"
          class="edit"
        >
          編輯個人資料
        </button>
      </div>
      <h3 class="name">{{ name }}</h3>
      <p class="account">@{{ account }}</p>
      <p class="description">
        {{ introduction | nullDescribe }}
      </p>
      <div class="follow d-flex">
        <router-link :to="`user/${this.id}/following`">
          <p>{{ followingCount }}個&thinsp;<span>跟隨中</span></p>
        </router-link>
        <router-link :to="`user/${this.id}/follower`">
          <p>{{ followerCount }}位&thinsp;<span>跟隨者</span></p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from '../apis/user'
import followAPI from '../apis/follow'
import { nullAvatarFilter, nullCoverFilter } from '../utils/mixins'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: -1,
      name: '',
      tweetCount: 0,
      account: '',
      introduction: '',
      followingCount: '',
      followerCount: '',
      cover: '',
      avatar: '',
      isNotify: true,
      isFollowed: '',
      isSelf: ''
    }
  },

  computed: {
    ...mapState(['currentUser'])
  },

  methods: {
    async fetchAccount() {
      try {
        // 預設當前使用者
        let id = -1
        if (!this.$route.params.id) {
          // const { data } = await userAPI.getCurrent()
          // if (data.status !== 'success') {
          //   throw new Error(data.message)
          // }
          // id = data.data.id
          id = this.currentUser.id
        } else {
          // 從路由讀取params.id覆蓋
          id = this.$route.params.id
        }

        const { data } = await userAPI.getProfile({ userId: id })
        // console.log('data', data)

        const {
          name,
          tweetCount,
          account,
          introduction,
          followingCount,
          followerCount,
          cover,
          avatar,
          isFollowed,
          isSelf
        } = data

        // 賦值
        this.id = id
        this.name = name
        this.account = account
        this.tweetCount = tweetCount
        this.introduction = introduction
        this.followingCount = followingCount
        this.followerCount = followerCount
        this.cover = cover
        this.avatar = avatar
        this.isFollowed = isFollowed
        this.isSelf = isSelf
      } catch (error) {
        console.log(error)
      }
    },


    // console.log(data)

    async toggleFollow() {
      try {
        if (!this.isFollowed) {
          // 加入跟隨
          const { data } = await followAPI.addFollow({ id: this.id })
          if (data.status === 'success') {
            this.isFollowed = true
          }
        } else {
          const { data } = await followAPI.deleteFollow({ userId: this.id })
          if (data.status === 'success') {
            this.isFollowed = false
          }
        }

      } catch (error) {
        console.log(error)
      }
    }
  },

  mixins: [nullAvatarFilter, nullCoverFilter],

  filters: {
    nullDescribe(text) {
      return text || '趕快寫點什麼讓大家認識你吧！！'
    }
  },

  created() {
    this.fetchAccount()
  },
  watch: {
    '$route.path'() {
      this.fetchAccount()
    },
    currentUser() {
      this.fetchAccount()
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-area {
  min-width: 300px;

  h3.name {
    color: var(--main-text);
    font-weight: 900;
    font-size: 19px;
    line-height: 28px;
  }
}
.header {
  border: 1px solid var(--theme-line);
  background-color: var(--just-white);
  padding: 6px 19px 7px;

  button {
    margin-right: 43px;
    @include size(24px, 24px);
    &:hover {
      svg > path {
        fill: var(--hover-color);
      }
    }
    &:focus {
      svg > path {
        fill: var(--focus-color);
      }
    }
  }

  p {
    color: var(--info);
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
  }
}

.user-photo {
  background-color: WhiteSmoke;
  position: relative;
  padding: 0 1px;
  height: 200px;

  img {
    object-fit: cover;
  }
}

.avatar {
  --avatar-width: 140px;
  position: relative;
  border-radius: 50%;
  background-color: WhiteSmoke;
  top: calc(0px - var(--avatar-width) / 2);
  left: 15px;
  @include size(var(--avatar-width), var(--avatar-width));

  img {
    object-fit: cover;
    border-radius: 50%;
  }

  .mask {
    position: absolute;
    top: 0%;
    left: 0%;

    @include size(100%, 100%);
    border-radius: 50%;
    border: 4px solid #fff;
  }
}

.user-info {
  padding: 20px 15px 0;

  .toolbar {
    margin-bottom: 34px;

    button.message,
    button.notify,
    button.notify-active {
      @include size(35px, 35px);
      margin-right: 10px;
    }
  }

  button.message {
    &.active,
    &:hover,
    &:focus {
      path {
        fill: var(--just-white);
      }
    }

    &.active {
      circle {
        fill: var(--theme-color);
        stroke: var(--theme-color);
      }
    }
    &:hover {
      circle {
        fill: var(--hover-color);
        stroke: var(--hover-color);
      }
    }
    &:focus {
      circle {
        fill: var(--focus-color);
        stroke: var(--focus-color);
      }
    }
  }

  button.notify {
    &:hover,
    &:focus {
      path {
        fill: var(--just-white);
      }
    }

    &:hover {
      circle {
        fill: var(--hover-color);
        stroke: var(--hover-color);
      }
    }
    &:focus {
      circle {
        fill: var(--focus-color);
        stroke: var(--focus-color);
      }
    }
  }

  // 編輯個人資料
  button.edit,
  button.follow {
    padding: 10px 15px;
    border-radius: 100px;

    font-size: 15px;
    line-height: 15px;
    font-weight: 700;
    color: var(--theme-color);
    border: 1px solid var(--theme-color);

    &.active,
    &:hover,
    &:focus {
      color: var(--just-white);
    }
    &.active {
      background-color: var(--theme-color);
      border-color: var(--theme-color);
    }

    &:hover {
      background-color: var(--hover-color);
      border-color: var(--hover-color);
    }

    &:focus {
      background-color: var(--focus-color);
      border-color: var(--focus-color);
    }
  }

  .account {
    color: var(--info);
    font-size: 15px;
    line-height: 22px;
  }

  .description {
    margin: 10px 0;

    color: black;
    font-size: 14px;
    line-height: 20px;
  }

  div:last-child {
    font-size: 14px;
    line-height: 20px;

    span {
      color: var(--info);
    }
    p:first-child {
      margin-right: 20px;
    }
  }
}

@media screen and (min-width: $breakpoint) {
  .profile-area {
    max-width: 600px;
  }
}
</style>
