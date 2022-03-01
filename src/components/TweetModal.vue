<template>
  <!-- Modal background-->
  <transition name="fade" mode="in-out">
    <div v-show="modal" @click.stop.prevent="modal = false" class="modal">
      <!-- Modal dialog -->
      <transition name="slide">
        <form
          @submit.prevent="submitTweet"
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
          <div class="modal-body d-flex">
            <div class="avatar">
              <router-link to="/main">
                <img :src="currentUser.avatar" alt="預設的頭像" />
              </router-link>
            </div>

            <textarea
              v-model="tweet"
              class="modal-content"
              placeholder="有什麼新鮮事？"
              maxlength="140"
              autofocus
            ></textarea>
          </div>

          <div
            class="modal-footer d-flex justify-content-end align-items-center"
          >
            <transition name="hint">
              <span v-if="tweetHint" class="hint">{{
                tweetHint === 'empty' ? '內容不可空白' : '字數不可超過 140 字'
              }}</span>
            </transition>
            <button type="submit" :disabled="isProcessing">推文</button>
          </div>
        </form>
      </transition>
    </div>
  </transition>
</template>

<script>
import tweetAPI from '../apis/tweet'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      modal: false,
      tweet: '',
      tweetHint: false,
      isProcessing: false
    }
  },

  computed: {
    ...mapState(['currentUser'])
  },

  watch: {
    tweet() {
      if (this.tweet.length > 140) {
        this.tweetHint = true
      } else this.tweetHint = false
    }
  },
  methods: {
    async submitTweet() {
      try {
        if (!this.tweet) {
          this.tweetHint = 'empty'
          this.$bus.$emit('toast', { icon: 'error', title: '內容不可空白' })
          return
        }

        if (this.tweet.length > 140) {
          this.tweetHint = 'empty'
          this.$bus.$emit('toast', {
            icon: 'error',
            title: '字數不可超過 140 字'
          })
          return
        }

        this.isProcessing = true

        const { data } = await tweetAPI.submitTweet({ description: this.tweet })
        console.log(data)

        if (data.status === 'success') {
          this.$bus.$emit('toast', {
            icon: 'success',
            title: '推文發送成功'
          })
        } else {
          throw new Error(data.message)
        }
        this.modal = false
        this.isProcessing = false
        this.tweet = ''
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
  created() {
    this.$bus.$on('tweetModal', (modal) => {
      this.modal = modal
    })
  },

  beforeDestroy() {
    // this.$bus.$off('tweetModal')
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/modalCommon.scss';

.modal {
  --modal-dialog-height: 450px;
  background: radial-gradient(
    circle at 50% calc(#{$modal-height} + (var(--modal-dialog-height) / 2)),
    var(--modal-background-center),
    var(--modal-background-around)
  );
}

.modal-dialog {
  min-width: 460px;
  min-height: 450px;
  flex-direction: column;
  font-weight: 500;
  transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.285);
  background-color: var(--just-white);
  // css scan #26
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  backdrop-filter: blur(8px);

  .modal-header {
    padding: 15px;
  }

  /* The Close Button */
  button.close {
    cursor: pointer;
    transition: transform 0.35s ease-out;
    transform: scale(100%);

    padding: 0;
    svg {
      width: 24px;
    }

    &:hover,
    &:focus {
      svg > path {
        fill: var(--hover-color);
      }
    }
  }

  hr {
    height: 1px;
    background-color: var(--theme-line);
  }
  min-height: var(--modal-dialog-height);
}

.modal-body {
  flex-grow: 1;
  padding: 15px;
  .avatar {
    img {
      width: 50px;
      height: 50px;
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

.modal-footer {
  padding: 0 15px 15px 15px;

  span:first-child {
    float: left;
  }

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
}

@media screen and (min-width: $breakpoint) {
  .modal {
    --modal-dialog-height: 300px;
  }
  .modal-dialog {
    max-width: 600px;
    min-height: var(--modal-dialog-height);
  }
}
</style>
