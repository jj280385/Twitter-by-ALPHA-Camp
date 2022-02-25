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
                  <img src="https://via.placeholder.com/150" alt="預設的頭像" />
                </router-link>
              </div>

              <div class="tweet-body">
                <div class="d-flex">
                  <h3 class="name">Apple</h3>
                  <span class="info">@apple．3小時</span>
                </div>

                <div class="tweet-content">
                  連好好的筆電都要挖瀏海是怎樣！？還有那個口罩Face
                  ID只有新機才能用真的是騙肖耶，凸！！以下是假字剛剛好140字喔，啾咪～麻看不出沒有，大笑書原本的。的創都這樣箱許，很難位旅人自己一點就。過就好感便宜的，收到切國中印象花可不可，事件文章不要好像也喜是為什⋯那邊的麼一買然後那。
                </div>
                <span class="reply-to"
                  >回覆給&thinsp;<router-link to="/">@apple</router-link></span
                >
              </div>
            </div>
            <!-- reply -->
            <div class="reply d-flex">
              <div class="avatar">
                <router-link to="/">
                  <img src="../assets/image/john-doe-50.svg" alt="預設的頭像" />
                </router-link>
              </div>

              <textarea
                class="reply-content"
                placeholder="推你的回覆"
                autofocus
              ></textarea>
            </div>
          </div>

          <div
            class="modal-footer d-flex justify-content-end align-items-center"
          >
            <span class="hint">字數不可超過140字</span>
            <button type="button">推文</button>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/modalCommon.scss";

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
      content: "";

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

    color: var(--modal-info);
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
  }

  span.reply-to {
    color: var(--modal-info);

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

    color: var(--modal-error);
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
