<template>
  <!-- Modal background-->
  <transition name="fade" mode="in-out">
    <div v-show="modal" @click.stop.prevent="modal = false" class="modal">
      <!-- Modal dialog -->
      <transition name="slide">
        <div
          v-show="modal"
          @click.stop.prevent="modal = true"
          class="modal-dialog d-flex flex-column"
        >
          <div class="modal-header">
            <button
              @click.stop.prevent="modal = false"
              class="close d-flex justify-content-center align-items-center"
            >
              <!-- SVG -->
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.41387 7.99988L15.2069 2.20687C15.5969 1.81687 15.5969 1.18388 15.2069 0.792875C14.8169 0.401875 14.1839 0.402875 13.7929 0.792875L7.99988 6.58588L2.20687 0.792875C1.81687 0.402875 1.18388 0.402875 0.792875 0.792875C0.401875 1.18288 0.402875 1.81587 0.792875 2.20687L6.58588 7.99988L0.792875 13.7929C0.402875 14.1829 0.402875 14.8159 0.792875 15.2069C0.987875 15.4019 1.24287 15.4999 1.49987 15.4999C1.75687 15.4999 2.01187 15.4019 2.20687 15.2069L7.99988 9.41387L13.7929 15.2069C13.9879 15.4019 14.2429 15.4999 14.4999 15.4999C14.7569 15.4999 15.0119 15.4019 15.2069 15.2069C15.5969 14.8169 15.5969 14.1839 15.2069 13.7929L9.41387 7.99988Z"
                  fill="#FF6600"
                />
              </svg>
              <!-- SVG -->
            </button>
          </div>
          <hr />
          <!-- modal-body -->
          <div class="modal-body d-flex flex-column">
            <!-- tweet -->
            <div class="tweet d-flex">
              <div class="avatar">
                <router-link to="/">
                  <img :src="avatar | nullAvatar" alt="預設的頭像" />
                </router-link>
              </div>

              <div class="tweet-body">
                <div class="d-flex">
                  <h3 class="name">
                    <router-link :to="`users/${id}`">{{ name }}</router-link>
                  </h3>
                  <span class="info">
                    <router-link :to="`users/${id}`">@{{ account }}</router-link
                    >．
                    <router-link :to="`users/${id}`">{{
                      createdAt | fromNow
                    }}</router-link>
                  </span>
                </div>

                <div class="tweet-content">
                  {{ description }}
                </div>
                <span class="reply-to"
                  >回覆給&thinsp;<router-link :to="`users/${id}`"
                    >@{{ account }}</router-link
                  ></span
                >
              </div>
            </div>
            <!-- reply -->
            <div class="reply d-flex">
              <div class="avatar">
                <router-link to="/">
                  <img
                    :src="currentUser.avatar | nullAvatar"
                    alt="預設的頭像"
                  />
                </router-link>
              </div>

              <textarea
                v-model="reply"
                class="reply-content"
                placeholder="推你的回覆"
                maxlength="140"
                autofocus
              ></textarea>
            </div>
          </div>

          <div
            class="modal-footer d-flex justify-content-end align-items-center"
          >
            <transition name="hint">
              <span v-if="replyHint" class="hint">字數不可超過140字</span>
              ></transition
            >
            <button @click="submitReply" :disabled="isProcessing" type="button">
              回覆
            </button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { fromNowFilter, nullAvatarFilter } from '../utils/mixins'
import tweetAPI from '../apis/tweet'
import replyAPI from '../apis/reply'
import { mapState } from 'vuex'

export default {
  mixins: [fromNowFilter, nullAvatarFilter],
  data() {
    return {
      modal: false,
      tweetId: -1,
      // 樓主
      id: -1,
      avatar: '',
      name: '',
      account: '',
      createdAt: '',
      description: '',
      // 回覆者
      reply: '',
      replyHint: false,
      isProcessing: false
    }
  },

  computed: {
    ...mapState(['currentUser']),
    replyCount() {
      if (this.reply) {
        this.reply.length >= 140 && (this.replyHint = true)
        this.reply.length <= 140 && (this.replyHint = false)
        return this.reply.length
      } else {
        return 0
      }
    }
  },

  methods: {
    async fetchTweet(tweetId) {
      try {
        const { data } = await tweetAPI.fetchTweet({ tweetId })
        this.id = data.userId
        this.avatar = data.User.avatar
        this.name = data.User.name
        this.account = data.User.account
        this.createdAt = data.createdAt
        this.description = data.description
      } catch (error) {
        console.log(error)
        this.$bus.$emit('toast', {
          icon: 'error',
          title: `${error}`
        })
      }
    },

    async submitReply() {
      try {
        if (!this.reply) {
          this.replyHint = true
          this.$bus.$emit('toast', { icon: 'error', title: '內容不可空白' })
          return
        }

        if (this.reply && this.reply.length >= 140) {
          this.replyHint = true
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '字數不可超過 140 字'
          })
          return
        }

        this.isProcessing = true

        const { data } = await replyAPI.subMitReply({
          tweetId: this.tweetId,
          comment: this.reply
        })
        console.log('測試成功', data)

        if (data.status === 'success') {
          this.$bus.$emit('toast', {
            icon: 'success',
            title: '回覆發送成功'
          })
        } else {
          throw new Error(data.message)
        }
        this.modal = false
        this.isProcessing = false
        this.reply = ''
      } catch (error) {
        console.log(error)
        this.isProcessing = false
        this.$bus.$emit('toast', {
          icon: 'error',
          title: `${error}`
        })
      }
    }
  },

  mounted() {
    this.$bus.$on('replyModal', (tweetId) => {
      this.fetchTweet(tweetId)
      this.tweetId = tweetId
      this.modal = true
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/modalCommon.scss';

.modal {
  --modal-dialog-height: 600px;
  background: radial-gradient(
    circle at 50% calc(#{$modal-height} + (var(--modal-dialog-height) / 2)),
    var(--modal-background-center),
    var(--modal-background-around)
  );
}

.modal-dialog {
  min-width: 460px;
  min-height: var(--modal-dialog-height);
}

.modal-body {
  flex-grow: 1;
  padding: 15px;
  --avatar-width: 50px;

  .tweet {
    // 供連接線定位
    position: relative;

    .avatar {
      margin-top: 3px;
    }

    overflow: hidden;
    // 產生連接線
    &::after {
      position: absolute;
      content: '';

      left: 25px;
      // 圖片的 margin + 圖片高度
      top: calc(3px + var(--avatar-width) + 5px);
      background-color: var(--avatar-connect);
      height: 100%;
      width: 2px;
    }
  }
  .reply {
    margin-top: 10px;
    flex-grow: 1;
  }

  .avatar {
    img {
      width: var(--avatar-width);
      height: var(--avatar-width);
      border-radius: 50%;
    }
  }

  textarea {
    flex-grow: 1;
    margin: 12px 0px 0px 10px;
    border: none;
    resize: none;

    font-size: 18px;
    line-height: 26px;
  }
}

.tweet-body {
  margin-left: 10px;

  h3.name {
    color: var(--main-text);
    font-size: 15px;
    line-height: 22px;

    font-weight: 700;
  }

  span.info {
    margin-left: 5px;

    color: var(--info);
    font-size: 15px;
    line-height: 22px;
  }

  .tweet-content {
    margin: 5px 0 19px;
    max-height: 90px;
    overflow: scroll;
    color: var(--main-text);
    font-size: 15px;
    line-height: 22px;
    font-weight: 400;
    word-break: break-all;
  }

  span.reply-to {
    color: var(--info);

    font-size: 13px;
    line-height: 13px;

    a {
      color: var(--theme-color);
    }
  }
}

.modal-footer {
  padding: 0 15px 15px 15px;

  span.hint {
    margin: 0 20px;

    color: var(--invalid);
    font-size: 15px;
    line-height: 15px;
  }

  button {
    padding: 10px 15px;
    border-radius: 100px;

    background-color: var(--theme-color);
    color: #fff;
    font-size: 18px;
    line-height: 18px;

    &:hover,
    &:focus {
      background-color: var(--hover-color);
      color: var(--theme-white);
    }
  }
}

// Vue transition
.hint-enter-active,
.hint-leave-active,
.hint-move {
  transition: opacity 0.35s ease-out, transform 0.35s ease-out;
}

.hint-enter {
  opacity: 10%;
  transform: translateY(-50%);
}

.hint-leave-to {
  opacity: 10%;
  transform: translateY(50%);
}

@media screen and (min-width: $breakpoint) {
  .modal {
    --modal-dialog-height: 450px;
  }
  .modal-dialog {
    max-width: 600px;
    min-height: var(--modal-dialog-height);
  }
}
</style>
